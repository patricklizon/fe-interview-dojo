import { test } from "uvu";
import assert from "uvu/assert";

import { promisify } from "../src/promisify";

test("wraps function with promise", async () => {
  let count = 0;
  const fun = (inc: number) => (count += inc);
  const promisedFun = promisify(fun);

  assert.is(count, 0);

  await promisedFun(5);

  assert.is(count, 5);
});

test("is chainable", async () => {
  let count = 0;
  const fun = (inc: number) => (count += inc);
  const promisedFun = promisify(fun);

  assert.is(count, 0);

  const res = await promisedFun(5).then((val) => val + 1);

  assert.is(res, 6);
});

test.run();
