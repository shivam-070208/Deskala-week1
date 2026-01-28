# Sukuna AI Task Automator 🪄

Welcome to the **Sukuna AI Task Automator** repo! This project is an intelligent CLI (Command Line Interface) tool that leverages the Gemini AI API to answer questions, automate tasks, and run shell commands in your development workflow.

---

## 🚀 Features

- **Conversational AI Agent**: Chat with Sukuna to ask questions or perform code/tasks.
- **Task Automation**: Executes shell commands, manipulates files, and more based on AI responses.
- **Extensive Task Library**: Includes a rich set of example tasks and guides.
- **VS Code Shortcuts Guide**: Handy cheatsheet for boosting your productivity!
- **Environment Config**: Easily switch and manage your Gemini API keys.

---

## 🗂️ Folder Structure

Below is an overview of the main folders and files in this repo:

```
├── modules/
│   ├── agent.module.js          # Main CLI agent for conversation and task execution
│   ├── ai.module.js             # Handles AI requests and responses (Gemini API integration)
│   └── terminal.module.js       # Safe execution of shell commands and process management
│
├── tasks/
│   ├── vscode-shortcut/
│   │   └── shortcut-cheats.md   # VS Code Windows/Linux shortcuts cheat sheet
│   └── ... (more tasks inside)  # Each subfolder contains a distinct task, solution, or reference
│
├── .example.env                 # Example file for configuring your Gemini API key
├── readme.md                    # (You are here!)
```

---

## 📑 Explanation of Key Files & Directories

### 1. **modules/**

All core logic and intelligence lives here!

- **agent.module.js**  
  Entry point for the CLI experience. Accepts user input, manages conversation, triggers actions based on AI decisions.

- **ai.module.js**  
  Handles all interactions with Google Gemini (or similar) AI services. Parses and forwards agent messages, keeps context.

- **terminal.module.js**  
  Safely runs shell/system commands as requested, captures their outputs or errors, enforces timeouts for safety.

---

### 2. **tasks/**

A curated set of task guides, how-tos, and helpful references.  
**Each subfolder is a different category or task.**

- **vscode-shortcut/**  
  Contains `shortcut-cheats.md`, a comprehensive markdown cheatsheet with 30+ essential VS Code shortcuts for navigation, editing, multi-cursor, formatting, and more.

- **(More tasks coming!)**  
  Expand this directory with your own tasks, scripts, or reference material!

---

### 3. **.example.env**

Template file for environment variables.  
**Usage:**  
Copy `.example.env` to `.env` and replace `enter_gemini_api_key_here` with your Gemini API key.

```
GEMINI_API_KEY=your_real_api_key_here
```

---

## 🛠️ How To Use

1. **Clone the Repo**

   ```bash
   git clone https://github.com/shivam-070208/Deskala-week1.git
   cd Deskala-week1
   ```

2. **Install Dependencies**

   > **Note:** This project uses [pnpm](https://pnpm.io/) for faster and more efficient package management.

   ```bash
   pnpm install
   ```

3. **Configure Your API Key**
   - Copy `.example.env` to `.env`
   - Get your Gemini API key and put it in the file.

4. **Run the CLI AI Agent**

   ```bash
    pnpm run dev
   ```

   You’ll see a prompt:

   ```
   Welcome to Sukuna! Ask anything or perform tasks.
   sukuna>
   ```

   Type a question, or try commands like:
   - `List files in this directory`
   - `Show me the VS Code shortcuts`
   - `Create a new file called hello.js`

---

## 📝 Example Tasks in `tasks/`

- **VS Code Shortcuts Cheat Sheet:**  
  Quickly reference productivity-boosting keyboard shortcuts for Windows and Linux.

- **(Add your own tasks!):**  
  Just create a new folder under `tasks/` and add markdown, scripts, or other resources.

---

## 🤖 How the Agent Works

- Accepts user input in natural language.
- Sends conversation history and your message to the AI (Gemini API).
- Receives structured actions (e.g., run a shell command, explain something, or write a file).
- Runs the requested command or explains the answer.
- Loops back for more questions—type `exit` or `quit` to end the session.

---

## ✨ Contribution

PRs, tasks, and new guides are welcome!  
Please fork and submit your improvements.

---

