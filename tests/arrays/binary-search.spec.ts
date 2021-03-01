import { test } from "uvu";
import assert from "uvu/assert";

import { binarySearch } from "../../src/arrays/binary-search";

type Data = [
  params: Parameters<typeof binarySearch>,
  expected: ReturnType<typeof binarySearch>
][];

const assertData = ([params, expected]: Data[number], idx: number): void => {
  const actual = binarySearch(...params);

  return assert.is(actual, expected, `Failed for data @ index: ${idx}`);
};

test("returns index of element", () => {
  const data: Data = [
    [[[], 4], -1],
    [[[0], 0], 0],
    [[[2, 3], 3], 1],
    [[[0, 1, 2], 4], -1],
    [[[1, 2, 3, 4, 5, 6], 4], 3],
    [[[1, 2, 3, 4, 5, 6, 7], 4], 3],
  ];

  data.forEach(assertData);
});

test.run();
