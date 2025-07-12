import fs from "fs";
import path from "path";
import { setTimeout as wait } from "timers/promises";

// 🎯 Target directory from CLI
const targetDir = process.argv[2];

if (!targetDir) {
  console.error("❌ Target directory not provided.");
  process.exit(1);
}

// 📁 Ensure target directory exists
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

console.log("\n🚀 Creating your project...\n");

await wait(500); // Simulate work

// 📦 Read from actual template directory
const currentDir = path.join(process.cwd(), "code");
const exclude = new Set(["insert.mjs", "node_modules", ".git"]);

const files = fs.readdirSync(currentDir);

let step = 1;

for (const file of files) {
  if (exclude.has(file)) continue;

  const src = path.join(currentDir, file);
  const dest = path.join(targetDir, file);

  fs.cpSync(src, dest, { recursive: true });

  console.log(`✅ Step ${step++}: Added ${file}`);
  await wait(200); // Animation-like feel
}

console.log("\n🎉 Project setup completed successfully!");
console.log(`📁 Location: ${targetDir}`);
console.log("📦 You're all set to begin!\n");

console.log("👉 Next steps:");
console.log(`   1. cd ${path.basename(targetDir)}`);
console.log("   2. npm install");
console.log("   3. npm run dev\n");

console.log("Happy coding! ✨");
