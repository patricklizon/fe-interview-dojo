import { test } from "uvu";
import assert from "uvu/assert";

import { mergeSort } from "../../src/sorters/merge-sort";

type Data = [
  param: Parameters<typeof mergeSort>[0],
  expected: ReturnType<typeof mergeSort>
][];

const assertData = ([param, expected]: Data[number], idx: number): void => {
  const actual = mergeSort(param);

  return assert.equal(actual, expected, `Failed for data @ index: ${idx}`);
};

test("sorts array", () => {
  const data: Data = [
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

  data.forEach(assertData);
});

test.run();
