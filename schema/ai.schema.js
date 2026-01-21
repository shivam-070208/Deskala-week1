import { z } from "zod";

export const responseSchema = z.object({
  type: z
    .enum(["ReadFile", "WriteFile", "RunCommand", "Final"])
    .describe(
      "The kind of action to perform. 'ReadFile' means to read a file, 'WriteFile' to write content to a file, 'RunCommand' to execute a terminal command, and 'Final' indicates no more actions are needed.",
    ),
  filePath: z
    .string()
    .optional()
    .describe(
      "The file path for ReadFile or WriteFile operations. Required if type is ReadFile or WriteFile.",
    ),
  contents: z
    .string()
    .optional()
    .describe("The content to write to a file. Required if type is WriteFile."),
  command: z
    .string()
    .optional()
    .describe(
      "The shell command to run if type is 'RunCommand'. Required if type is RunCommand.",
    ),
  message: z
    .string()
    .min(1, "Message cannot be empty")
    .describe(
      "A message to display to the user. For example, 'Reading <fileName>', or a final message if type is Final.",
    ),
  nextTask: z
    .string()
    .optional()
    .describe(
      "This is a next task that will be passed back to you for further task if any.",
    ),
});
