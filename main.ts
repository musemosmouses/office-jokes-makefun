import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Make the AI Judge Laugh: Office Jokes (make.fun).
// One-line office joke, written to /output/entry.txt and nothing else.
const JOKE =
  "The fire drill is our best team-building exercise: nothing bonds coworkers like standing in the rain together, silently blaming whoever burned the popcorn.";

// The grader runs this as an unprivileged user on a read-only filesystem
// with only the output directory writable, so never remove or recreate it:
// just create it if needed and write the single entry file.
// The gate accepts 1 to 199 characters of UTF-8 text; fail loudly here
// instead of ever shipping an entry the sealed scorer would refuse.
if ([...JOKE].length < 1 || [...JOKE].length > 199 || JOKE.trim().length === 0) {
  throw new Error(`entry.txt must be 1-199 characters, got ${[...JOKE].length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
