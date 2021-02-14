import { suite } from "uvu";
import assert from "uvu/assert";

import { flatten } from "./example";

const Flatten = suite("flatten");

Flatten("returns unmodified flat array", () => {
  const array = [1, 2, 3, 4, 5, 6, 7];
  const given = flatten(array);
  const expected = [...array];

  assert.equal(given, expected);
});

Flatten("flattens deeply nested array", () => {
  const array = [1, [2, [3, [4, [5, [6, [7]]]]]]];
  const given = flatten(array);
  const expected = [1, 2, 3, 4, 5, 6, 7];

  assert.equal(given, expected);
});

Flatten("flattens multiple arrays on the same nest level", () => {
  const array = [1, [2, 3], [4, 5], 6, 7];
  const given = flatten(array);
  const expected = [1, 2, 3, 4, 5, 6, 7];

  assert.equal(given, expected);
});

Flatten("flattens array with multiple nested levels", () => {
  const array = [1, [2, [3, 4], 5], 6, [7]];
  const given = flatten(array);
  const expected = [1, 2, 3, 4, 5, 6, 7];

  assert.equal(given, expected);
});

Flatten.run();
