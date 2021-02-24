import assert from "uvu/assert";
import { test } from "uvu";

import { makeChange } from "../src/make-change";

test("returns least amount of coins", () => {
  const data: [
    arguments: [denominations: number[], givenToChange: number],
    expected: number
  ][] = [
    [[[3], 2], 0],
    [[[5], 0], 0],
    [[[10, 1, 6], 12], 2],
    [[[25, 10, 5], 40], 3],
    [[[10, 5, 25], 50], 2],
    [[[10, 25, 5], 75], 3],
    [[[25, 10, 5], 10], 1],
    [[[10, 25, 5, 1], 11], 2],
    [[[12, 4, 2, 1], 7], 3],
    [[[13, 8, 3, 1], 21], 2],
  ];

  for (const [args, expected] of data) {
    assert.is(makeChange(...args), expected);
  }
});

test.run();
