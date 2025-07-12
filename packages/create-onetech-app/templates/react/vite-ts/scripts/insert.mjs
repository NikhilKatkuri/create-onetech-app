import fs from "fs";
import path from "path";

// Parse CLI arguments
const [base, template, stackCSV, targetDir] = process.argv.slice(2);
const stacks = stackCSV ? stackCSV.split(",") : [];

// Paths setup
const templatesRoot = path.resolve("..", ".."); // from scripts/
const basePath = path.join(templatesRoot, base, template);
const prebuildPath = path.join(basePath, "prebuild");

const EXCLUDE = new Set(["node_modules", ".git", "scripts"]);

// Rules for conditional file ignore
const rules = {
  tailwind: ["App.css", "index.css"],
  firebase: [".env.firebase"],
};

// Merge all rules for selected stacks (1-line)
const blocks = stacks.flatMap(stack => rules[stack] || []);

/**
 * Copy files from one folder to another, skipping EXCLUDE and dynamic blocks
 */

function copyDir(from = "", to) {
  if (!fs.existsSync(to)) fs.mkdirSync(to, { recursive: true });

  const items = fs.readdirSync(from);
  for (const item of items) {
    if (EXCLUDE.has(item)) continue;
    if (blocks.includes(item)) {
      console.log(`Skipped (rule): ${item}`);
      continue;
    }

    const src = path.join(from, item);
    const dest = path.join(to, item);

    fs.lstatSync(src).isDirectory()
      ? copyDir(src, dest)
      : fs.copyFileSync(src, dest);
  }
}

// Copy from prebuild
console.log("Copying base template...");
copyDir(prebuildPath, targetDir);

// Merge each selected stack
for (const stack of stacks) {
  const stackPath = path.join(basePath, stack);
  if (fs.existsSync(stackPath)) {
    console.log(`Merging stack: ${stack}`);
    copyDir(stackPath, targetDir);
  } else {
    console.warn(`Stack '${stack}' not found. Skipping.`);
  }
}

console.log("\n Project created at:", targetDir);
