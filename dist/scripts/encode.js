"use strict";
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const encoder_1 = require("../lib/encoder");
const encoder = new encoder_1.default();
const inputPath = process.argv[2];
if (!inputPath) {
    console.error(`Usage: node ${path.basename(process.argv[1])} <input file>`);
    process.exit(1);
}
const words = fs
    .readFileSync(inputPath)
    .toString("utf8")
    .split(/\s/g)
    .map(line => line.trim())
    .filter(line => line.length)
    .sort();
const encoded = encoder.encode(words);
console.log(encoded.join("\n"));
//# sourceMappingURL=encode.js.map