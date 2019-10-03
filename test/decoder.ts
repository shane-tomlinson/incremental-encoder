/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { assert } from "chai";
import Decoder from "../lib/decoder";

describe("decoder", () => {
  const decoder = new Decoder();

  it("decodes the list", () => {
    assert.deepEqual(
      decoder.decode(["0entry", "52", "61", "0out_of_order"]),
      ["entry", "entry2", "entry21", "out_of_order"]
    );
  });

  it('throws on invalid input', () => {
    assert.throws(() => {
      decoder.decode(['1first_entry_must_start_with_0'])
    }, 'Invalid line: 1first_entry_must_start_with_0')

    assert.throws(() => {
      decoder.decode([''])
    }, 'Invalid line: ')
  });
});
