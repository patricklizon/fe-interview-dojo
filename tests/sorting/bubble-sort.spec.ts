import assert from "uvu/assert";
import { test } from "uvu";

import { bubbleSort } from "../../src/sorting/bubble-sort";

type Data = [
  param: Parameters<typeof bubbleSort>[0],
  expected: ReturnType<typeof bubbleSort>
][];

const assertData = ([param, expected]: Data[number], idx: number): void => {
  const actual = bubbleSort(param);

  return assert.equal(actual, expected, `Failed for data @ index: ${idx}`);
};

test("sorts array", () => {
  const data: Data = [
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

  data.forEach(assertData);
});

test.run();
