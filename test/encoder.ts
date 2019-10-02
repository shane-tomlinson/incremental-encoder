/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { assert } from "chai";
import Encoder from "../lib/encoder";

describe("encoder", () => {
  it("encodes the dictionary", () => {
    const encoder = new Encoder();
    const result = encoder.encode([
      // encoder sorts list
      "out_of_order",
      "entry2",
      // empty entries are ignored
      "",
      // entries with just spaces are ignored
      "  ",
      "entry",
      "entry21"
    ]);
    assert.deepEqual(result, ["0 entry", "5 2", "6 1", "0 out_of_order"]);
  });
});
