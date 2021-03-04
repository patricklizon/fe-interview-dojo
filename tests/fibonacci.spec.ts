import { suite } from "uvu";
import assert from "uvu/assert";

import { fibonacci, fibonacciSequence } from "../src/fibonacci";

const Fibonacci = suite("fibonacci");

Fibonacci("handles negative values", () => {
  assert.equal(fibonacci(-1), 0);
  assert.equal(fibonacci(-22), 0);
  assert.equal(fibonacci(-33), 0);
  assert.equal(fibonacci(-44), 0);
});

Fibonacci("calculates fibonacci correctly", () => {
  assert.equal(fibonacci(1), 1);
  assert.equal(fibonacci(2), 1);
  assert.equal(fibonacci(3), 2);
  assert.equal(fibonacci(4), 3);
  assert.equal(fibonacci(5), 5);
  assert.equal(fibonacci(6), 8);
  assert.equal(fibonacci(7), 13);
  assert.equal(fibonacci(8), 21);
  assert.equal(fibonacci(9), 34);
  assert.equal(fibonacci(10), 55);
});

Fibonacci.run();

const FibonacciSequence = suite("fibonacciSequence");

FibonacciSequence("handles negative size values", () => {
  assert.equal(fibonacciSequence(-1), []);
  assert.equal(fibonacciSequence(-22), []);
  assert.equal(fibonacciSequence(-44), []);
});

FibonacciSequence("calculates fibonacci sequence correctly", () => {
  const data: [
    arg: Parameters<typeof fibonacciSequence>[0],
    expected: ReturnType<typeof fibonacciSequence>
  ][] = [
    [0, []],
    [1, [1]],
    [2, [1, 1]],
    [3, [1, 1, 2]],
    [4, [1, 1, 2, 3]],
    [5, [1, 1, 2, 3, 5]],
    [6, [1, 1, 2, 3, 5, 8]],
    [7, [1, 1, 2, 3, 5, 8, 13]],
    [8, [1, 1, 2, 3, 5, 8, 13, 21]],
    [9, [1, 1, 2, 3, 5, 8, 13, 21, 34]],
    [10, [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]],
  ];

  for (const [arg, expected] of data) {
    assert.equal(
      fibonacciSequence(arg),
      expected,
      `returns wrong sequence for size: ${arg}`
    );
  }
});

FibonacciSequence.run();
