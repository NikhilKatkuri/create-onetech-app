#!/usr/bin/env node
import path from "path";
import inquirer from "inquirer";
import techStacks from "@utils/techstack";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

type Props = {
  projectName: string;
  base: string;
  template: string;
  stack: string[];
  version: string;
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function getProjectName(): Promise<string> {
  const { projectName } = await inquirer.prompt([
    {
      name: "projectName",
      type: "input",
      message: "\uD83D\uDCC1 Enter your project name:",
      default: "my-app",
      validate: (input) => (input ? true : "Project name cannot be empty."),
    },
  ]);
  return projectName;
}

async function promptProjectSetup(): Promise<{ base: string; template: string; stack: string[] }> {
  const bases = techStacks.map((stack) => stack.base);
  const { base } = await inquirer.prompt([
    {
      name: "base",
      type: "list",
      message: "\uD83E\uDDF1 Choose base framework:",
      choices: bases,
    },
  ]);

  const { template } = await inquirer.prompt([
    {
      name: "template",
      type: "list",
      message: "\uD83D\uDCE6 Select the build template:",
      choices: techStacks.find((stack) => stack.base === base)?.templates || [],
    },
  ]);

  const { stack } = await inquirer.prompt([
    {
      name: "stack",
      type: "checkbox",
      message: "\uD83E\uDDF9 Select additional stack tools (optional):",
      choices: techStacks.find((stack) => stack.base === base)?.stack || [],
      default: techStacks.find((stack) => stack.base === base)?.stack?.slice(0, 1) || [],
    },
  ]);

  return { base, template, stack };
}

async function main() {
  const args = process.argv.slice(2);
  const props: Props = {
    projectName: "",
    base: "",
    template: "",
    stack: [],
    version: "latest",
  };

  const userDir = process.cwd();

  // CLI: create-onetech-app blog-app --react --vite-js-tailwind-firebase@latest
  if (args.length >= 3 && args[1].startsWith("--") && args[2].startsWith("--")) {
    props.projectName = args[0];
    props.base = args[1].replace(/^--/, "");

    const [combo, version = "latest"] = args[2].replace(/^--/, "").split("@");
    const [template, maybeLang, ...stack] = combo.split("-");

    // Support for vite-js / vite-ts style templates
    props.template = maybeLang === "js" || maybeLang === "ts" ? `${template}-${maybeLang}` : template;
    props.stack = maybeLang === "js" || maybeLang === "ts" ? stack : [maybeLang, ...stack];
    props.version = version;
  } else {
    props.projectName = await getProjectName();
    const { base, template, stack } = await promptProjectSetup();
    Object.assign(props, { base, template, stack });
  }

  const templateFolder = path.resolve(__dirname, `../templates/${props.base}/${props.template}`);
  const insertScriptPath = path.join(templateFolder, "scripts", "insert.mjs");
  const targetDir = path.join(userDir, props.projectName);

  execSync(
    `node "${insertScriptPath}" "${props.base}" "${props.template}" "${props.stack.join(",")}" "${targetDir}"`,
    {
      stdio: "inherit",
      cwd: templateFolder,
    }
  );
}

main();
