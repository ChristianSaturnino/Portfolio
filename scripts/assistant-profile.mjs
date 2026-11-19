// Packs private/assistant-profile.md (gitignored) into the ASSISTANT_PROFILE env var.
// - writes/updates the line in .env so local dev picks it up
// - prints the value to paste on Vercel (Settings > Environment Variables)
// Usage: npm run assistant:profile
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const SRC = "private/assistant-profile.md";
if (!existsSync(SRC)) {
  console.error(`${SRC} not found`);
  process.exit(1);
}
const text = readFileSync(SRC, "utf8").trim();
const value = Buffer.from(text, "utf8").toString("base64");

const env = existsSync(".env") ? readFileSync(".env", "utf8") : "";
const line = `ASSISTANT_PROFILE=${value}`;
const next = /^ASSISTANT_PROFILE=.*$/m.test(env) ? env.replace(/^ASSISTANT_PROFILE=.*$/m, line) : `${env.replace(/\s*$/, "\n")}${line}\n`;
writeFileSync(".env", next);

console.log(`.env updated (${text.length} chars, ${value.length} base64).`);
console.log("\nOn Vercel, set ASSISTANT_PROFILE to:\n");
console.log(value);
