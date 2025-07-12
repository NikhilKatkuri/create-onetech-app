#!/usr/bin/env node
import path from "path";
import inquirer from "inquirer";
import techStacks from "@utils/techstack";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

// This CLI tool helps scaffold a new project with your preferred tech stack.

// Type definition for storing all parsed or prompted CLI configurations
type Props = {
  projectName: string;
  base: string;
  template: string;
  stack: string[];
  version: string;
};

// Prompt the user to enter a project name if it's not passed via CLI
async function getProjectName(): Promise<string> {
  const { projectName } = await inquirer.prompt([
    {
      name: "projectName",
      type: "input",
      message: " Enter your project name:",
      default: "my-app",
      validate: (input) => (input ? true : "Project name cannot be empty."),
    },
  ]);
  return projectName;
}

// Prompt the user for base (framework), template (build tool), and optional stack features
async function promptProjectSetup(): Promise<{
  base: string;
  template: string;
  stack: string[];
}> {
  const bases = techStacks.map((stack) => stack.base);
  const { base } = await inquirer.prompt([
    {
      name: "base",
      type: "list",
      message: "🧱 Choose base framework:",
      choices: bases,
    },
  ]);

  const { template } = await inquirer.prompt([
    {
      name: "template",
      type: "list",
      message: "📦 Select the build template:",
      choices: techStacks.find((stack) => stack.base === base)?.templates || [],
    },
  ]);

  const { stack } = await inquirer.prompt([
    {
      name: "stack",
      type: "checkbox",
      message: "🧩 Select additional stack tools (optional):",
      choices: techStacks.find((stack) => stack.base === base)?.stack || [],
      default: techStacks.find((stack) => stack.base === base)?.stack?.slice(0, 1) || [],
    },
  ]);

  return { base, template, stack };
}
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  /**
   * This is the main logic of the CLI.
   * It reads the CLI arguments, determines if any are missing,
   * and either parses them or prompts the user to complete the configuration.
   */
  const args = process.argv.slice(2);

  // User’s original CLI path
  const userDir = process.cwd();


  // Initial placeholder for all project config options
  const props: Props = {
    projectName: "",
    base: "",
    template: "",
    stack: [],
    version: "latest",
  };

  // Case: both project name and shorthand (like --react-vite@latest) are provided
  if (args.length >= 2) {
    // Extract projectName and shorthand from the arguments.
    // The shorthand is expected to be in the format: --base-template-stack@version.
    const [projectName, shorthand] = args;

    // Remove the '--' and split the shorthand into its components
    const cleanArgs = shorthand.replace(/^--/, "");
    // Split the cleaned shorthand into components.
    // The shorthand is expected to be in the format: base-template-stack@version.
    const [combo, version = "latest"] = cleanArgs.split("@");
    // Split the combo into base, template, and stack components.
    // The combo is expected to be in the format: base-template-stack.
    const [base, template, ...stack] = combo.split("-");
    // Assign the extracted values to the props object.
    // The props object will contain projectName, base, template, stack, and version.
    Object.assign(props, { projectName, base, template, stack, version });
  } else {
    // Case: either 1 argument or none

    // If a project name is passed (not starting with --), use it; otherwise prompt

    props.projectName =
      args.length === 1 && !args[0].startsWith("--")
        ? args[0]
        : await getProjectName();
    // If the argument is shorthand (starts with --), parse it
    if (args.length === 1 && args[0].startsWith("--")) {
      const cleanArgs = args[0].replace(/^--/, "");
      const [combo, version = "latest"] = cleanArgs.split("@");
      const [base, template, ...stack] = combo.split("-");
      Object.assign(props, { base, template, stack, version });
    } else {
      // Otherwise, prompt the user to choose base/template/stack manually
      const { base, template, stack } = await promptProjectSetup();
      Object.assign(props, { base, template, stack });
    }
  }

  const folderName = props.stack.length ? props.stack.join("-") : "vite-default";
  const templateFolder = path.resolve(
    __dirname,
    `../templates/${props.base}/${props.template}/${folderName}`
  );
  const insertScriptPath = path.join(templateFolder, "insert.mjs");
  const targetDir = path.join(userDir, props.projectName);

  // ▶️ Run the insert script from inside the template folder
  execSync(`node insert.mjs "${targetDir}"`, {
    stdio: "inherit",
    cwd: templateFolder,
  });
}

main();