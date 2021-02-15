import { test } from "uvu";
import assert from "uvu/assert";

import { removeDuplicates } from "../../src/arrays/removeDuplicates";

test("does not change array without duplicates", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  const actual = removeDuplicates(arr);

  assert.equal(actual, arr);
});

test("removes duplicated values, without mutating data", () => {
  const arr = [7, 1, 1, 3, 2, 2, 6, 7, 8, 1];
  const expected = [7, 1, 3, 2, 6, 8];
  const actual = removeDuplicates(arr);

  assert.snapshot(JSON.stringify(arr), `[7,1,1,3,2,2,6,7,8,1]`);
  assert.equal(actual, expected);
});

test.run();
