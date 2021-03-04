import { suite } from "uvu";
import assert from "uvu/assert";

import { fibonacci, fibonacciSequence } from "../src/fibonacci";

const Fibonacci = suite("fibonacci");

type FibonacciData = [
  arg: Parameters<typeof fibonacci>[0],
  expected: ReturnType<typeof fibonacci>
];

const assertFibonacci = ([arg, expected]: FibonacciData, idx: number) =>
  assert.equal(
    fibonacci(arg),
    expected,
    `returns wrong result for data: [${arg}, ${expected}] @ index: ${idx}`
  );

Fibonacci("handles negative values", () => {
  const data: FibonacciData[] = [
    [-1, 0],
    [-22, 0],
    [-100, 0],
  ];

  data.forEach(assertFibonacci);
});

Fibonacci("calculates fibonacci correctly", () => {
  const data: FibonacciData[] = [
    [1, 1],
    [2, 1],
    [3, 2],
    [4, 3],
    [5, 5],
    [6, 8],
    [7, 13],
    [8, 21],
    [9, 34],
    [10, 55],
  ];

  data.forEach(assertFibonacci);
});

Fibonacci.run();

const FibonacciSequence = suite("fibonacciSequence");

FibonacciSequence("handles negative size values", () => {
  assert.equal(fibonacciSequence(-1), []);
  assert.equal(fibonacciSequence(-22), []);
  assert.equal(fibonacciSequence(-44), []);
});

FibonacciSequence("calculates fibonacci sequence correctly", () => {
  const data: ReturnType<typeof fibonacciSequence>[] = [
    [],
    [1],
    [1, 1],
    [1, 1, 2],
    [1, 1, 2, 3],
    [1, 1, 2, 3, 5],
    [1, 1, 2, 3, 5, 8],
    [1, 1, 2, 3, 5, 8, 13],
    [1, 1, 2, 3, 5, 8, 13, 21],
    [1, 1, 2, 3, 5, 8, 13, 21, 34],
    [1, 1, 2, 3, 5, 8, 13, 21, 34, 55],
  ];

  data.forEach((expected, idx) =>
    assert.equal(
      fibonacciSequence(expected.length),
      expected,
      `returns wrong sequence for size: ${expected.length} @ index: ${idx}`
    )
  );
});

FibonacciSequence.run();
