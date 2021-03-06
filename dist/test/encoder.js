"use strict";
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const encoder_1 = require("../lib/encoder");
describe("encoder", () => {
    it("encodes the dictionary", () => {
        const encoder = new encoder_1.default();
        const result = encoder.encode([
            // encoder sorts list
            "out_of_order",
            "this_is_one_really_long_string",
            "this_is_one_ready_cab",
            "entry2",
            // empty entries are ignored
            "",
            // entries with just spaces are ignored
            "  ",
            "entry",
            "entry21"
        ]);
        chai_1.assert.deepEqual(result, ["0entry", "52", "61", "0out_of_order", "0this_is_one_ready_cab", "flly_long_string"]);
    });
});
//# sourceMappingURL=encoder.js.map