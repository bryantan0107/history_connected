import { cp, rm } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const source = resolve(root, "outputs");
const target = resolve(root, "public");

await rm(target, { recursive: true, force: true });
await cp(source, target, {
  recursive: true,
  filter: (src) => !src.includes(`${source}/.vercel`) && !src.endsWith(`${source}/.gitignore`),
});

console.log("Copied outputs/ to public/ for Vercel.");
