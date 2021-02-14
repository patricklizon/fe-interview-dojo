import { suite } from "uvu";
import assert from "uvu/assert";
import { flatten } from "./exampe";

const Flatten = suite("flatten");

Flatten("returns unmodified flat array", () => {
  const array = [1, 2, 3, 4, 5, 6, 7];
  const given = flatten(array);
  const expected = [...array];

  assert.equal(given, expected);
});

Flatten("returns flatten array", () => {
  const array = [1, [2, [3, [4, [5, [6, [7]]]]]]];
  const given = flatten(array);
  const expected = [1, 2, 3, 4, 5, 6, 7];

  assert.equal(given, expected);
});

Flatten("returns flatten array", () => {
  const array = [1, [2, [3, 4], 5], 6, [7]];
  const given = flatten(array);
  const expected = [1, 2, 3, 4, 5, 6, 7];

  assert.equal(given, expected);
});

Flatten("returns flatten array", () => {
  const array = [1, [2, 3], [4, 5], 6, 7];
  const given = flatten(array);
  const expected = [1, 2, 3, 4, 5, 6, 7];

  assert.equal(given, expected);
});

Flatten.run();
