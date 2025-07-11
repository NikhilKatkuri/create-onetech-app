import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import techStacks from './dist/utils/techstack.js';

// Get __dirname from ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the root template folder (e.g., 'src/templates')
const templateRoot = path.join(__dirname, 'templates');

// Ensure the 'templates' folder exists
if (!fs.existsSync(templateRoot)) {
  fs.mkdirSync(templateRoot, { recursive: true });
}

// Loop through each stack and create subdirectories for its templates
techStacks.forEach((stack) => {
  const stackDir = path.join(templateRoot, stack.base);

  // Ensure the base directory exists
  if (!fs.existsSync(stackDir)) {
    fs.mkdirSync(stackDir);
    console.log(`Created base folder: ${stackDir}`);
  }

  // Create folders for each template inside the base
  stack.templates.forEach((template) => {
    const templateDir = path.join(stackDir, template);
    if (!fs.existsSync(templateDir)) {
      fs.mkdirSync(templateDir);
      console.log(`Created template: ${templateDir}`);
    } else {
      console.log(`Already exists: ${templateDir}`);
    }
  });
});
