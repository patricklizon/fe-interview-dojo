import { test } from "uvu";
import assert from "uvu/assert";

import { mergeSort } from "../../src/arrays/merge-sort";

test("sorts array", () => {
  const data: [given: number[], expected: number[]][] = [
    [[], []],
    [[1], [1]],
    [
      [7, 3, 5],
      [3, 5, 7],
    ],
    [
      [7, 3, 5, 7],
      [3, 5, 7, 7],
    ],
    [
      [7, 3, 5, 4, 9, 1],
      [1, 3, 4, 5, 7, 9],
    ],
  ];

  for (const [given, expected] of data) {
    assert.equal(mergeSort(given), expected);
  }
});

test.run();
