import readline from "readline";
import { getAIResponse } from "./ai.module.js";

import { executeAction } from "../utils/executor.utils.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * @returns {Promise<void>}
 */
export async function runCliAgent() {
  try {
    const askQuestion = (query) =>
      new Promise((resolve) => {
        rl.question(query, resolve);
      });

    console.log("Welcome to Sukuna! Ask anything or perform tasks.");
    console.log('Type "exit" or "quit" to leave.\n');

    while (true) {
      const userInput = await askQuestion("sukuna> ");
      const trimmedInput = userInput.trim();

      if (
        trimmedInput.toLowerCase() === "exit" ||
        trimmedInput.toLowerCase() === "quit"
      ) {
        console.log("Goodbye!");
        rl.close();
        break;
      }

      if (!trimmedInput) {
        continue;
      }
      const conversationHistory = [];
      const maxIterations = 10;
      let iteration = 0;

      while (iteration < maxIterations) {
        iteration += 1;

        try {
          const aiResponse = await getAIResponse(
            trimmedInput,
            conversationHistory,
          );

          const result = await executeAction(aiResponse);

          console.log(`\n ${aiResponse.message || ""}`);

          if (result.type === "RunCommand") {
            if (result.stdout) {
              console.log(result.stdout);
            }
            if (result.stderr) {
              console.error(result.stderr);
            }

            console.log(`Exit code: ${result.exitCode}`);
          } else if (result.type === "ReadFile") {
            console.log(`File contents:\n${result.contents}`);
          } else if (result.type === "WriteFile") {
            console.log(`File written successfully.`);
          }
          conversationHistory.push({
            role: "user",
            parts: [{ text: trimmedInput }],
          });
          conversationHistory.push({
            role: "model",
            parts: [{ text: JSON.stringify(aiResponse) }],
          });
          conversationHistory.push({
            role: "user",
            parts: [{ text: `Tool result: ${JSON.stringify(result)}` }],
          });

          if (aiResponse.type === "Final") {
            console.log(`\n ${aiResponse.message}\n`);
            break;
          }
          if (aiResponse.nextTask) {
            continue;
          }

          if (!result.success) {
            console.error(`\n Error: ${result.error}\n`);
            break;
          }
        } catch (error) {
          console.error(`\n Error: ${error.message}\n`);
          if (error.message.includes("GEMINI_API_KEY")) {
            console.error("Please set GEMINI_API_KEY in your .env file.\n");
          }
          break;
        }
      }

      if (iteration >= maxIterations) {
        console.log("\n Maximum iterations reached. Stopping.\n");
      }
    }
  } catch (error) {
    console.error(" error:", error);
    process.exit(1);
  } finally {
    rl.close();
  }
}
