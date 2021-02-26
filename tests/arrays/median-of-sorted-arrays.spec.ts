import { test } from "uvu";
import assert from "uvu/assert";

import { medianOfSortedArrays } from "../../src/arrays/median-of-sorted-arrays";

test("finds median of empty arrays", () => {
  const actual = medianOfSortedArrays([], []);
  const expected = 0;

  assert.is(actual, expected);
});

type Data = [
  params: Parameters<typeof medianOfSortedArrays>,
  expected: number
][];

const assertData = ([params, expected]: Data[number], idx: number): void => {
  const actual = medianOfSortedArrays(...params);

  return assert.is(actual, expected, `Failed for data @ index: ${idx}`);
};

test("finds median of odd elements arrays", () => {
  const data: Data = [
    [[[-1], [-21]], -11],
    [[[1], [2]], 1.5],
    [[[2], [1]], 1.5],
    [
      [
        [3, 4, 5],
        [1, 2, 4],
      ],
      3.5,
    ],
    [
      [
        [10, 20, 30],
        [2, 2, 2, 2, 3],
      ],
      2.5,
    ],
  ];

  data.forEach(assertData);
});

test("finds median of even elements arrays", () => {
  const data: Data = [
    [
      [
        [1, 2],
        [2, 3],
      ],
      2,
    ],
  ];

  data.forEach(assertData);
});

test("finds median of odd and even elements arrays", () => {
  const data: Data = [
    [[[1, 2], [2]], 2],
    [
      [
        [1, 2],
        [2, 4, 6],
      ],
      2,
    ],
  ];

  data.forEach(assertData);
});

test.run();
