import * as chai from "chai";
import Decoder from "../lib/decoder";

const { assert } = chai;

describe("decoder", () => {
  const decoder = new Decoder();

  it("decodes the list", () => {
    assert.deepEqual(
      decoder.decode(["0 entry", "5 2", "6 1", "0 out_of_order"]),
      ["entry", "entry2", "entry21", "out_of_order"]
    );
  });

  it('throws on invalid input', () => {
    assert.throws(() => {
      decoder.decode(['invalid prefix'])
    }, 'Invalid line: invalid prefix')

    assert.throws(() => {
      decoder.decode(['lacksprefix'])
    }, 'Invalid line: lacksprefix')

    assert.throws(() => {
      decoder.decode([''])
    }, 'Invalid line: ')
  });
});
