#!/usr/bin/env node
import {
  techstack_default
} from "./chunk-RUE3EB6R.js";

// src/index.ts
import inquirer from "inquirer";
async function getProjectName() {
  const { projectName } = await inquirer.prompt([
    {
      name: "projectName",
      type: "input",
      message: " Enter your project name:",
      default: "my-app",
      validate: (input) => input ? true : "Project name cannot be empty."
    }
  ]);
  return projectName;
}
async function promptProjectSetup() {
  const bases = techstack_default.map((stack2) => stack2.base);
  const { base } = await inquirer.prompt([
    {
      name: "base",
      type: "list",
      message: "\u{1F9F1} Choose base framework:",
      choices: bases
    }
  ]);
  const { template } = await inquirer.prompt([
    {
      name: "template",
      type: "list",
      message: "\u{1F4E6} Select the build template:",
      choices: techstack_default.find((stack2) => stack2.base === base)?.templates || []
    }
  ]);
  const { stack } = await inquirer.prompt([
    {
      name: "stack",
      type: "checkbox",
      message: "\u{1F9E9} Select additional stack tools (optional):",
      choices: techstack_default.find((stack2) => stack2.base === base)?.stack || [],
      default: techstack_default.find((stack2) => stack2.base === base)?.stack?.slice(0, 2) || []
    }
  ]);
  return { base, template, stack };
}
async function main() {
  const args = process.argv.slice(2);
  const props = {
    projectName: "",
    base: "",
    template: "",
    stack: [],
    version: "latest"
  };
  if (args.length >= 2) {
    const [projectName, shorthand] = args;
    const cleanArgs = shorthand.replace(/^--/, "");
    const [combo, version = "latest"] = cleanArgs.split("@");
    const [base, template, ...stack] = combo.split("-");
    Object.assign(props, { projectName, base, template, stack, version });
  } else {
    props.projectName = args.length === 1 && !args[0].startsWith("--") ? args[0] : await getProjectName();
    if (args.length === 1 && args[0].startsWith("--")) {
      const cleanArgs = args[0].replace(/^--/, "");
      const [combo, version = "latest"] = cleanArgs.split("@");
      const [base, template, ...stack] = combo.split("-");
      Object.assign(props, { base, template, stack, version });
    } else {
      const { base, template, stack } = await promptProjectSetup();
      Object.assign(props, { base, template, stack });
    }
  }
  console.log("\nFinal Configuration:", props);
}
main();
