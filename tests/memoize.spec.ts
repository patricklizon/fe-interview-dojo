import sinon from "sinon";
import { test } from "uvu";
import assert from "uvu/assert";

import { memoize } from "../src/memoize";

test("returns correct value for primitives", () => {
  const sum = (x: number, y: number): number => x + y;
  const memoizedSum = memoize(sum);

  const data = [
    [memoizedSum(1, 1), 2],
    [memoizedSum(1, 1), 2],
    [memoizedSum(1, 2), 3],
    [memoizedSum(2, 1), 3],
    [memoizedSum(1, 2), 3],
  ];

  for (const [actual, expected] of data) {
    assert.is(actual, expected);
  }
});

test("returns memoized value", () => {
  const spy = sinon.spy();
  const memoizedMethod = memoize((x: number) => {
    spy();
    return x;
  });

  memoizedMethod(1);
  memoizedMethod(1);
  memoizedMethod(2);
  memoizedMethod(2);
  memoizedMethod(1);
  memoizedMethod(2);

  sinon.assert.calledTwice(spy);
});

test("returns correct value for arrays", () => {
  const merge = (x: unknown[], y: unknown[]): unknown[] => x.concat(y);
  const memoizedMerge = memoize(merge);

  const data = [
    [memoizedMerge([1], [1]), [1, 1]],
    [memoizedMerge([1], [1]), [1, 1]],
    [memoizedMerge([1, 2], [3, 4]), [1, 2, 3, 4]],
    [memoizedMerge([2], [1]), [2, 1]],
    [memoizedMerge([1], [2]), [1, 2]],
  ];

  for (const [actual, expected] of data) {
    assert.equal(actual, expected);
  }
});

test("returns correct value for objects", () => {
  const merge = (
    x: Record<string, any>,
    y: Record<string, any>
  ): Record<string, any> => ({ ...x, ...y });
  const memoizedMerge = memoize(merge);

  const data = [
    [memoizedMerge({ a: "aaa" }, { b: "bbb" }), { a: "aaa", b: "bbb" }],
    [memoizedMerge({ a: "aaa" }, { b: "bbb" }), { a: "aaa", b: "bbb" }],
    [
      memoizedMerge({ c: "ccc" }, { d: { e: "eee" } }),
      { c: "ccc", d: { e: "eee" } },
    ],
  ];

  for (const [actual, expected] of data) {
    assert.equal(actual, expected);
  }
});

test.run();
