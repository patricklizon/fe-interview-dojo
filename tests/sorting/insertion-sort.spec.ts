import assert from "uvu/assert";
import { test } from "uvu";

import { insertionSort } from "../../src/sorting/insertion-sort";

test("returns empty array", () => {
  const actual = insertionSort([]);
  const expected: number[] = [];

  assert.equal(actual, expected);
});

test("returns already sorted array", () => {
  const actual = insertionSort([1, 2, 3, 4, 5]);
  const expected: number[] = [1, 2, 3, 4, 5];

  assert.equal(actual, expected);
});

test("sorts numbers", () => {
  const data: [given: number[], expected: number[]][] = [
    [
      [5, 4, 3, 2, 1],
      [1, 2, 3, 4, 5],
    ],
    [
      [1, 7, 94, 23, 4, 2, 1, 1],
      [1, 1, 1, 2, 4, 7, 23, 94],
    ],
  ];

  data.forEach(([given, expected], idx) => {
    const actual = insertionSort(given);

    assert.equal(
      actual,
      expected,
      `given: [${given.toString()}], data index: ${idx}`
    );
  });
});

test.run();
