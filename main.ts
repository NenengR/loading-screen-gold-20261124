// Loading Screen Gold: a loading-screen tip for stressed developers and AI
// coding agents. Writes one line, at most 200 characters, to /output/entry.txt.
// Revision: tightened the header comment; the tip line itself is unchanged.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const line =
  "Loading tip: your AI agent has read the whole codebase by now. It is stalling because it found the comment that says do not touch this.";

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ??
  join(dirname(fileURLToPath(import.meta.url)), "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
