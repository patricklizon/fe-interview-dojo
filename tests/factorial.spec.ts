import assert from "uvu/assert";
import { test } from "uvu";

import { factorial } from "../src/factorial";

test("computes correctly for negative numbers", () => {
  const expected = 1;
  const actual = factorial(-4);

  assert.is(actual, expected);
});

test("computes correctly for values lesser than 2", () => {
  const data: number[] = [-1, 0, 1].map(factorial);
  const expected = 1;

  data.forEach((x) => assert.is(x, expected, `${x} is not equal ${expected}`));
});

test("computes correctly for 2", () => {
  const expected = 2;
  const actual = factorial(2);

  assert.is(actual, expected);
});

test("computes correctly", () => {
  const expected = 120;
  const actual = factorial(5);

  assert.is(actual, expected);
});

test.run();
