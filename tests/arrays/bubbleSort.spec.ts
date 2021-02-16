import assert from "uvu/assert";
import { test } from "uvu";

import { bubbleSort } from "../../src/arrays/bubbleSort";

test("sorts array", () => {
  const data: [given: number[], expected: number[]][] = [
    [[1], [1]],
    [
      [2, 1],
      [1, 2],
    ],
    [
      [9, 0, 0, 0, 1],
      [0, 0, 0, 1, 9],
    ],
    [
      [9, 1, 8, 5, 3, 7],
      [1, 3, 5, 7, 8, 9],
    ],
  ];

  for (const [given, expected] of data) {
    assert.equal(bubbleSort(given), expected);
  }
});

test.run();
