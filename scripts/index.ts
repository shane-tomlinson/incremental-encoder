import * as fs from "fs";
import * as path from "path";
import FrontEncoder from "../lib/encoder";

const encoder = new FrontEncoder();

const inputPath: string = process.argv[2];

if (!inputPath) {
  console.error(`Usage: node ${path.basename(process.argv[1])} <input file>`);
  process.exit(1);
}
const words: string[] = fs
  .readFileSync(inputPath)
  .toString("utf8")
  .split(/\s/g)
  .map(line => line.trim())
  .filter(line => line.length)
  .sort();


const encoded = encoder.encode(words);
console.log(encoded.join("\n"));
