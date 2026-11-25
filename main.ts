// The 3 AM Excuse — u-hazel-walrus-38-4764-the-3-am-excuse-c1017878
// Writes one excuse line (under 200 characters) to /output/entry.txt
// and prints the same line to stdout.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "My union contract says I sign nothing between 2 and 6 AM — so your 3 AM 'once-in-a-lifetime' trade can file its grievance with the sunrise.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
