import { writeFileSync, mkdirSync, chmodSync } from "node:fs";
import { join } from "node:path";

// One-line exit: the captain's last act is sailing past his own stop.
const PICK = "I resign as ferry captain, effective tonight: after fourteen years of bringing everyone home, I am sailing past my own stop.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, PICK, "utf8");
chmodSync(target, 0o644);
