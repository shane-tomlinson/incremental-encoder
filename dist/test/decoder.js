"use strict";
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const decoder_1 = require("../lib/decoder");
describe("decoder", () => {
    const decoder = new decoder_1.default();
    it("decodes the list", () => {
        chai_1.assert.deepEqual(decoder.decode(["0entry", "52", "61", "0out_of_order"]), ["entry", "entry2", "entry21", "out_of_order"]);
    });
    it('throws on invalid input', () => {
        chai_1.assert.throws(() => {
            decoder.decode(['1first_entry_must_start_with_0']);
        }, 'Invalid line: 1first_entry_must_start_with_0');
        chai_1.assert.throws(() => {
            decoder.decode(['']);
        }, 'Invalid line: ');
    });
});
//# sourceMappingURL=decoder.js.map