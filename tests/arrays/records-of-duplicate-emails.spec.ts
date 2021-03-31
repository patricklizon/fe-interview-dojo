import { test } from "uvu";
import assert from "uvu/assert";

import { recordOfDuplicateEmails } from "../../src/arrays/records-of-duplicate-emails";

type Given = Parameters<typeof recordOfDuplicateEmails>[number];

test("returns correct value", () => {
  const given: Given = [
    {
      email: "a@a.com",
      contacts: ["b@b.com", "c@c.com"],
    },
    {
      email: "b@b.com",
      contacts: ["c@c.com"],
    },
  ];
  const actual = recordOfDuplicateEmails(given);
  const expected = {
    "c@c.com": ["a@a.com", "b@b.com"],
  };

  assert.equal(actual, expected);
});

test("returns correct value for empty contacts list", () => {
  const given: Given = [
    {
      email: "a@a.com",
      contacts: [],
    },
    {
      email: "b@b.com",
      contacts: [],
    },
  ];
  const actual = recordOfDuplicateEmails(given);
  const expected = {};

  assert.equal(actual, expected);
});

test("returns correct value for single entry", () => {
  const given: Given = [
    {
      email: "x@y.z",
      contacts: ["a@a.com", "b@b.com"],
    },
  ];
  const actual = recordOfDuplicateEmails(given);
  const expected = {};

  assert.equal(actual, expected);
});

test("returns correct value for empty data", () => {
  const given: Given = [];
  const actual = recordOfDuplicateEmails(given);
  const expected = {};

  assert.equal(actual, expected);
});

test.run();
