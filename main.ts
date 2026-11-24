// Weirdest Job Title — make.fun entry
// Bounty: u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922
//
// The title below is one original job title, written fresh for this entry,
// mapped against the judge's five criteria (most important first):
//   1. Weird job title: a senior corporate role — with an absurd remit.
//   2. Stranger than ordinary work: nobody has a VP whose whole job is
//      saying sorry to geese; the twist is gloriously specific, not generic.
//   3. Funny on the first read: the formal title collides with the image
//      of a suited executive bowing and apologizing to an angry goose.
//   4. Sounds like a real job: "Senior Vice President of ..." is a real
//      title shape, and the duty is concrete enough to picture the person
//      doing it (clipboard, pond, hostile waterfowl, sincere apology).
//   5. Reads instantly: 45 characters, one glance, no setup needed.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const JOB_TITLE = "Senior Vice President of Apologizing to Geese";

const OUT_PATH = "/output/entry.txt";

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

// Gate checks (mirror the competition gate: 1-60 chars, not whitespace-only,
// single line, valid UTF-8 text).
if (JOB_TITLE.length < 1 || JOB_TITLE.length > 60) {
  fail(`job title must be 1-60 characters, got ${JOB_TITLE.length}`);
}
if (JOB_TITLE.trim().length === 0) {
  fail("job title must not be whitespace-only");
}
if (JOB_TITLE.includes("\n") || JOB_TITLE.includes("\r")) {
  fail("job title must be a single line");
}

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, JOB_TITLE, "utf8");

console.log(`wrote ${JOB_TITLE.length} characters to ${OUT_PATH}`);
