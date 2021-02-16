import { test } from "uvu";
import assert from "uvu/assert";

import { binarySearch } from "../../src/arrays/binary-search";

test("returns index of element", () => {
  const data: [args: [number[], number], expected: number][] = [
    [[[], 4], -1],
    [[[0], 0], 0],
    [[[2, 3], 3], 1],
    [[[0, 1, 2], 4], -1],
    [[[1, 2, 3, 4, 5, 6], 4], 3],
    [[[1, 2, 3, 4, 5, 6, 7], 4], 3],
  ];

  for (const [args, expected] of data) {
    assert.is(binarySearch(...args), expected);
  }
});

test.run();
