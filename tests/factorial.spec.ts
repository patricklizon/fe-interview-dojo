import assert from "uvu/assert";
import { test } from "uvu";

import { factorial } from "../src/factorial";

test("computes correctly", () => {
  const expected = 1;
  const actual = factorial(0);

  assert.is(actual, expected);
});

test("computes correctly", () => {
  const expected = 120;
  const actual = factorial(5);

  assert.is(actual, expected);
});
