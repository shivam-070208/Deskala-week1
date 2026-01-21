import { readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";

/**
 * Reads a text file.
 * @param {string} path
 * @returns {Promise<string>}
 */
export async function readTextFile(path) {
  if (typeof path !== "string" || !path.trim()) {
    throw new Error("readTextFile: path must be a non-empty string");
  }
  try {
    return await readFile(path, "utf-8");
  } catch (error) {
    throw new Error(`Failed to read file ${path}: ${error.message}`);
  }
}

/**
 * Writes text to a file.
 * @param {string} path
 * @param {string} contents
 * @returns {Promise<void>}
 */
export async function writeTextFile(path, contents) {
  if (typeof path !== "string" || !path.trim()) {
    throw new Error("writeTextFile: path must be a non-empty string");
  }
  if (typeof contents !== "string") {
    throw new Error("writeTextFile: contents must be a string");
  }
  try {
    await writeFile(path, contents, "utf-8");
  } catch (error) {
    throw new Error(`Failed to write file ${path}: ${error.message}`);
  }
}

/**
 * Checks if a file exists.
 * @param {string} path
 * @returns {boolean}
 */
export function fileExists(path) {
  return existsSync(path);
}
