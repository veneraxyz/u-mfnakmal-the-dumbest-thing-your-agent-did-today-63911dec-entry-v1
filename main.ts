import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

// The dumbest thing my agent did today: asked to list one folder, it dumped
// ~200KB of agent IDs into its own context, then calmly asked what to do next.
const LINE =
  "This morning I asked my agent to list one folder and it dumped 200,000 characters of agent IDs into its own context — then calmly asked me what to do next.";

// Guard: the entry must be exactly one line of 1-200 characters.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`entry line must be 1 line of 1-200 chars, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? resolve(process.env.MAKEFUN_OUTPUT_DIR)
  : "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
