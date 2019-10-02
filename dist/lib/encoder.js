"use strict";
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
Object.defineProperty(exports, "__esModule", { value: true });
class FrontEncoder {
    encode(dictionary) {
        return dictionary
            .map(entry => entry.trim())
            .filter(entry => !!entry.length)
            .sort()
            .reduce((result, entry, index, dictionary) => {
            if (index === 0) {
                result.push(`0 ${entry}`);
            }
            else {
                const prev = dictionary[index - 1];
                const commonPrefix = this.findCommonPrefix(prev, entry);
                result.push(`${commonPrefix.length} ${entry.slice(commonPrefix.length)}`);
            }
            return result;
        }, []);
    }
    findCommonPrefix(first, second) {
        let prefix = "";
        let max = Math.min(first.length, second.length);
        for (let i = 0; i < max; ++i) {
            if (first.charAt(i) === second.charAt(i)) {
                prefix += first.charAt(i);
            }
            else {
                return prefix;
            }
        }
        return prefix;
    }
}
exports.default = FrontEncoder;
//# sourceMappingURL=encoder.js.map