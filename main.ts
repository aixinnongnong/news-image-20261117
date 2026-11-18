// News-image entry: one picture summing up the world's news of Tuesday
// 17 November 2026. The picture is drawn in this repository as entry.png;
// this program (Node 22, standard library only) copies that file to the
// output directory the grader names, so the result is deterministic.
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// The picture is a fixed 1024x1024 PNG of about 194 KiB, well inside the
// competition's 1 MiB and 1024x1024 caps. Nothing is drawn or fetched while
// the program runs, so it needs no network and always finishes far inside
// the 60-second limit; the same bytes go in and the same bytes come out.
//
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
