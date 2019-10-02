import * as chai from "chai";
import Encoder from "../lib/encoder";

const { assert } = chai;

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
