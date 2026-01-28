import { spawn } from "node:child_process";

/**
 * Runs a shell command and returns stdout/stderr + exit code.
 * @param {string} command
 * @param {{ cwd?: string, timeoutMs?: number }} [opts]
 * @returns {Promise<{ stdout: string, stderr: string, exitCode: number }>}
 */
export function runCommand(command, opts = {}) {
  return new Promise((resolve, reject) => {
    if (typeof command !== "string" || !command.trim()) {
      reject(new Error("runCommand: command must be a non-empty string"));
      return;
    }

    const { cwd, timeoutMs = 60000 } = opts;

    const child = spawn(command, {
      cwd,
      shell: true,
      windowsHide: true,
      env: process.env,
    });

    let stdout = "";
    let stderr = "";

    const timeout = setTimeout(() => {
      child.kill("SIGKILL");
      reject(new Error(`Command timed out after ${timeoutMs}ms`));
    }, timeoutMs);

    child.stdout?.on("data", (buf) => {
      stdout += String(buf);
    });

    child.stderr?.on("data", (buf) => {
      stderr += String(buf);
    });

    child.on("error", (err) => {
      clearTimeout(timeout);
      reject(err);
    });

    child.on("close", (code) => {
      clearTimeout(timeout);
      resolve({ stdout, stderr, exitCode: Number(code ?? 0) });
    });
  });
}
