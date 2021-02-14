import { test } from "uvu";
import assert from "uvu/assert";
import FakeTimers from "@sinonjs/fake-timers";

import { debounce } from "../src/debounce";

let clock: FakeTimers.InstalledClock;

test.before(() => {
  clock = FakeTimers.install();
});

test.after(() => {
  clock.uninstall();
});

test("runs function as soon as possible", () => {
  let actual = 0;
  const expected = 1;
  const fun = () => (actual += 1);
  const debouncedFun = debounce(fun, 0);

  debouncedFun();

  assert.is.not(actual, expected);

  clock.tick(0);

  assert.is(actual, expected);
});

test("runs function with arguments", () => {
  let actual = 1;
  const inc = 5;
  const expected = actual + inc;
  const fun = (inc: number) => (actual += inc);
  const debouncedFun = debounce(fun, 0);

  assert.is.not(actual, expected);

  debouncedFun(inc);
  clock.tick(10);

  assert.is(actual, expected);
});

test("runs function once after defined timeout", () => {
  let actual = 0;
  const expected = 1;
  const fun = () => (actual += 1);
  const debouncedFun = debounce(fun, 10);
  clock.tick(9);

  assert.is.not(actual, expected);

  debouncedFun();

  assert.is.not(actual, expected);

  clock.tick(10);

  assert.is(actual, expected);
});

test("runs function only once after multiple calls", () => {
  let actual = 0;
  const expected = 1;
  const fun = () => (actual += 1);
  const debouncedFun = debounce(fun, 10);

  debouncedFun();

  assert.is.not(actual, expected);

  debouncedFun();

  assert.is.not(actual, expected);

  debouncedFun();

  assert.is.not(actual, expected);

  clock.runAll();

  assert.is(actual, expected);
});

test("runs function multiple times after multiple calls", () => {
  let actual = 0;
  const expected = 2;
  const fun = () => (actual += 1);
  const delayStepMs = 10;
  const debouncedFun = debounce(fun, delayStepMs);

  debouncedFun();
  clock.tick(5);
  debouncedFun();
  clock.tick(delayStepMs);

  assert.is.not(actual, expected);

  debouncedFun();
  clock.tick(delayStepMs);

  assert.is(actual, expected);
});

test.run();
