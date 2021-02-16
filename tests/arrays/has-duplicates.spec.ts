import { test } from "uvu";
import assert from "uvu/assert";

import { hasDuplicates } from "../../src/arrays/has-duplicates";

test("array has unique values", () => {
  const actual = hasDuplicates([1, 2, 3, 4]);

  assert.is(actual, false);
});

test("array has duplicated values", () => {
  const actual = hasDuplicates([1, 1, 2, 4, 2, 4]);

  assert.is(actual, true);
});

test.run();
