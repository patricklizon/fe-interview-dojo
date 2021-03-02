import { test } from "uvu";
import assert from "uvu/assert";

import { fibonacci } from "../src/fibonacci";

test("handles negative values", () => {
  assert.equal(fibonacci(-1), 0);
  assert.equal(fibonacci(-22), 0);
  assert.equal(fibonacci(-33), 0);
  assert.equal(fibonacci(-44), 0);
});

test("calculates fibonacci correctly", () => {
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

test.run();
