"use strict";
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
class FrontDecoder {
    decode(encoded) {
        return encoded.reduce((result, current, index) => {
            const numSharedStr = current.charAt(0);
            const numShared = parseInt(numSharedStr, constants_1.RADIX);
            if (isNaN(numShared)) {
                throw new Error(`Invalid line: ${current}`);
            }
            if (index === 0 && numShared !== 0) {
                throw new Error(`Invalid line: ${current}`);
            }
            const suffix = current.slice(1);
            if (numShared === 0) {
                result.push(suffix);
            }
            else {
                const prev = result[index - 1];
                result.push(`${prev.slice(0, numShared)}${suffix}`);
            }
            return result;
        }, []);
    }
}
exports.default = FrontDecoder;
//# sourceMappingURL=decoder.js.map