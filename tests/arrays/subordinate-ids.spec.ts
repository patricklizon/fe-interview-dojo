import { test } from "uvu";
import assert from "uvu/assert";

import { subordinateIds } from "../../src/arrays/subordinate-ids";

test("returns correct ids", () => {
  const given = {
    "1": ["2", "3", "7"],
    "2": ["5", "6", "8"],
    "7": ["444"],
    "8": [],
  };

  const actual: string[] = subordinateIds(given)("1");
  const expected: string[] = ["2", "3", "7", "5", "6", "8", "444"];

  assert.equal(actual, expected);
});

test("returns empty array for not existing id's", () => {
  const given = {
    "8": [],
  };

  const actual: string[] = subordinateIds(given)("1000");
  const expected: string[] = [];

  assert.equal(actual, expected);
});

test.run();
