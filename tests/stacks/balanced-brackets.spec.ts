import assert from "uvu/assert";
import { test } from "uvu";

import { balancedBrackets } from "../../src/stacks/balanced-brackets";

type Data = [
  args: Parameters<typeof balancedBrackets>,
  expected: ReturnType<typeof balancedBrackets>
][];

const assertData = ([params, expected]: Data[number], idx: number): void => {
  const actual = balancedBrackets(...params);

  return assert.is(actual, expected, `Failed for data @ index: ${idx}`);
};

test("is balanced", () => {
  const data: Data = [
    [[""], true],
    [["{[()]}"], true],
    [["{{[[(())]]}}"], true],
    [["{[]()[]}"], true],
    [["{(([])[])[]}"], true],
  ];

  data.forEach(assertData);
});

test("is not balanced", () => {
  const data: Data = [
    [["{]"], false],
    [["{[(]]}"], false],
  ];

  data.forEach(assertData);
});

test("handles wrongly formatted string", () => {
  const data: Data = [
    [["{}]"], false],
    [["{"], false],
    [["{[a()a]}"], false],
    [["abccba"], false],
  ];

  data.forEach(assertData);
});

test.run();
