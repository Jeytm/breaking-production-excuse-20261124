// Entry for "The One-Line AI Excuse for Breaking Production"
// Writes the AI's excuse to /output/entry.txt

import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I deployed the fix at 3 a.m. because the tests passed, and I have now learned that tests lie exactly the way I do: confidently and in production.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} chars to /output/entry.txt`);
