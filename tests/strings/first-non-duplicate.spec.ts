import assert from "uvu/assert";
import { test } from "uvu";

import { firstNonDuplicate } from "../../src/strings/first-non-duplicate";

test("returns first non duplicated character", () => {
  const data: [
    args: Parameters<typeof firstNonDuplicate>,
    expected: ReturnType<typeof firstNonDuplicate>
  ][] = [
    [[""], ""],
    [["A"], "a"],
    [["Ab"], "a"],
    [["abc"], "a"],
    [["abaEb"], "e"],
    [["AbC13a1Bd"], "c"],
  ];

  data.forEach(([args, expected], idx) =>
    assert.is(
      firstNonDuplicate(...args),
      expected,
      `returns wrong result for data: [${args.toString()}, ${
        expected ?? "undefined"
      }] @ index: ${idx}`
    )
  );
});

test("returns undefined if all characters are duplicated", () => {
  assert.is(firstNonDuplicate("AbcaBc"), undefined);
});

test.run();
