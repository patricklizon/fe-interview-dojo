import assert from "uvu/assert";
import { test } from "uvu";

import { quickSort } from "../../src/arrays/quick-sort";

test("returns empty array", () => {
  const actual = quickSort([]);
  const expected: number[] = [];

  assert.equal(actual, expected);
});

type Data = [
  param: Parameters<typeof quickSort>[0],
  expected: ReturnType<typeof quickSort>
][];

const assertData = ([params, expected]: Data[number], idx: number): void => {
  const actual = quickSort(params);

  return assert.equal(actual, expected, `Failed for data @ index: ${idx}`);
};

test("sorts odd elements numbered array", () => {
  const data: Data = [
    [[0], [0]],
    [
      [5, 2, 3],
      [2, 3, 5],
    ],
    [
      [123, -23, 2, 98, 12, 966, 18],
      [-23, 2, 12, 18, 98, 123, 966],
    ],
    [
      [-2, -5, 0, 0, -2],
      [-5, -2, -2, 0, 0],
    ],
  ];

  data.forEach(assertData);
});

test("sorts even elements numbered array", () => {
  const data: Data = [
    [
      [0, 0],
      [0, 0],
    ],
    [
      [5, 2, 7, 3],
      [2, 3, 5, 7],
    ],
    [
      [123, 12, 966, 18],
      [12, 18, 123, 966],
    ],
    [
      [0, -2, -5, 0, 0, -2],
      [-5, -2, -2, 0, 0, 0],
    ],
  ];

  data.forEach(assertData);
});

test.run();
