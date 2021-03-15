import assert from "uvu/assert";
import { test } from "uvu";

import { equalStacks } from "../../src/stacks/equal-stacks";

type Data = [
  args: Parameters<typeof equalStacks>,
  expected: ReturnType<typeof equalStacks>
][];

test("returns correct size", () => {
  const data: Data = [
    [
      [
        [3, 2, 1, 1, 1],
        [4, 3, 2],
        [1, 1, 4, 1],
      ],
      5,
    ],
    [
      [
        [1, 2, 1, 1],
        [1, 1, 2],
        [1, 1],
      ],
      2,
    ],
    [[[], [1, 1, 2], [1, 1]], 0],
    [[[], [], []], 0],
  ];

  data.forEach(([args, expected], idx) =>
    assert.is(
      equalStacks(...args),
      expected,
      `does not match expected value at index: ${idx}`
    )
  );
});
