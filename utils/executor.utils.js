import { readTextFile, writeTextFile } from "../modules/fsutils.module.js";
import { runCommand } from "../modules/terminal.module.js";

/**
 * @param {object} action - The action object from AI response
 * @returns {Promise<object>} - Result of the action execution
 */
export async function executeAction(action) {
  const { type, filePath, contents, command, message } = action;

  try {
    if (type === "ReadFile") {
      if (!filePath) {
        return { success: false, error: "filePath is required for ReadFile" };
      }
      const fileContents = await readTextFile(filePath);
      return {
        success: true,
        type: "ReadFile",
        filePath,
        contents: fileContents,
        message: `Read file: ${filePath}`,
      };
    }

    if (type === "WriteFile") {
      if (!filePath) {
        return { success: false, error: "filePath is required for WriteFile" };
      }
      if (contents === undefined) {
        return { success: false, error: "contents is required for WriteFile" };
      }
      await writeTextFile(filePath, contents);
      return {
        success: true,
        type: "WriteFile",
        filePath,
        message: `Wrote file: ${filePath}`,
      };
    }

    if (type === "RunCommand") {
      if (!command) {
        return { success: false, error: "command is required for RunCommand" };
      }
      const result = await runCommand(command);
      return {
        success: result.exitCode === 0,
        type: "RunCommand",
        command,
        exitCode: result.exitCode,
        stdout: result.stdout,
        stderr: result.stderr,
        message: `Command executed: ${command}`,
      };
    }

    if (type === "Final") {
      return {
        success: true,
        type: "Final",
        message: message || "Task completed",
      };
    }

    return { success: false, error: `Unknown action type: ${type}` };
  } catch (error) {
    return {
      success: false,
      error: error.message || String(error),
    };
  }
}
