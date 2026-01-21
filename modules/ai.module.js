import { GoogleGenAI } from "@google/genai";
import zodToJsonSchema from "zod-to-json-schema";
import { responseSchema } from "../schema/ai.schema.js";

const geminiApiKey = process.env.GEMINI_API_KEY;
if (!geminiApiKey) throw new Error("GEMINI_API_KEY not set");
const ai = new GoogleGenAI({ apiKey: geminiApiKey });

/**
 * @param {string} prompt - The user's message to the AI.
 * @param {Array} [conversationHistory=[]] - Previous conversation turns for context.
 * @returns {Promise<object>} - The AI's structured response (parsed JSON).
 */
async function getAIResponse(prompt, conversationHistory = []) {
  if (typeof prompt !== "string" || !prompt.trim()) {
    throw new Error("Prompt must be a non-empty string.");
  }

  const systemInstruction = `
You are Sukuna, an advanced AI agent that can read files, write files, and run terminal commands. 
You must always respond with valid JSON matching the provided response schema.

When a complex task is requested, break it down and solve one step at a time. For each step, return a "nextTask" describing what should be done next, until the overall task is completed and you send a "Final" response.

For each step, your JSON response **must** follow this schema:
{
  "type": "ReadFile" | "WriteFile" | "RunCommand" | "Final",
  "filePath": string (optional, required for ReadFile/WriteFile),
  "contents": string (optional, required for WriteFile),
  "command": string (optional, required for RunCommand),
  "message": string (required: short update for the user about what you are doing or what just finished),
  "nextTask": string (optional, your suggestion for what to do after this step, for multi-step tasks)
}

Example:
User prompt: "Create a todo app"
Respond:
{
  "type": "RunCommand",
  "command": "mkdir todo",
  "message": "Created 'todo' directory.",
  "nextTask": "Create an index.html file inside the todo directory for the app UI.", 
}

Strictly follow the JSON schema and always output only the JSON object, nothing else.
    `;

  let contents;
  if (conversationHistory.length > 0) {
    contents = [
      ...conversationHistory,
      { role: "user", parts: [{ text: prompt }] },
    ];
  } else {
    contents = prompt;
  }

  const result = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents,
    config: {
      systemInstruction,
      responseMimeType: "application/json",
      responseJsonSchema: zodToJsonSchema(responseSchema),
    },
  });

  const responseText = result.text;

  if (!responseText) {
    throw new Error("AI did not return a valid response.");
  }

  try {
    return JSON.parse(responseText);
  } catch (e) {
    throw new Error(`AI returned invalid JSON: ${responseText}`);
  }
}

export { getAIResponse };
