import { test } from "uvu";
import assert from "uvu/assert";
import * as sinon from "sinon";

import { debounce } from "../src/debounce";

const clock = sinon.useFakeTimers({
  now: 1483228800000,
  toFake: ["setTimeout"],
});

test.before(() => {
  clock.runAll();
});

test.after(() => {
  clock.restore();
});

test("runs function as soon as possible", () => {
  let actual = 0;
  const expected = 1;
  const fun = () => (actual += 1);
  const debouncedFun = debounce(fun, 0);

  debouncedFun();
  clock.tick(10);

  assert.is(actual, expected);
});

test("runs function with arguments", () => {
  let actual = 1;
  const expected = 6;
  const fun = (inc: number) => (actual += inc);
  const debouncedFun = debounce(fun, 0);
  const inc = 5;

  assert.is.not(actual, expected);

  debouncedFun(inc);
  clock.tick(10);

  assert.is(actual, expected);
});

test("runs function once after defined timeout", () => {
  let actual = 0;
  const expected = 1;
  const fun = () => (actual += 1);
  const debouncedFun = debounce(fun, 200);

  clock.tick(100);

  assert.is.not(actual, expected);

  debouncedFun();
  clock.tick(200);

  assert.is(actual, expected);
});

test("runs function only once after multiple calls", () => {
  let actual = 0;
  const expected = 1;
  const fun = () => (actual += 1);
  const debouncedFun = debounce(fun, 10);

  debouncedFun();
  clock.tick(1);
  debouncedFun();
  clock.tick(1);
  debouncedFun();
  clock.tick(50);

  assert.is(actual, expected);
});

test.run();
