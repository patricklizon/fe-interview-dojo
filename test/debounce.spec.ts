import { suite } from "uvu";
import assert from "uvu/assert";

import { debounce } from "../src/debounce";

const Debounce = suite("debounce");

Debounce("runs function as soon as possible", () => {
  let actual = 0;
  const expected = 1;
  const fun = () => (actual += 1);
  const debouncedFun = debounce(fun, 0);

  debouncedFun();

  assert.is(actual, expected);
});

Debounce("runs function with arguments", () => {
  let actual = 1;
  const expected = 6;
  const fun = (inc: number) => (actual += inc);
  const debouncedFun = debounce(fun, 0);
  const inc = 5;

  debouncedFun(inc);

  assert.is(actual, expected);
});

Debounce("runs function once after 20ms", () => {
  let actual = 0;
  const expected = 1;
  const fun = () => (actual += 1);
  const debouncedFun = debounce(fun, 20);

  debouncedFun();

  assert.is(actual, expected);
});

Debounce("runs function only once after 20ms", () => {
  let actual = 0;
  const expected = 1;
  const fun = () => (actual += 1);
  const debouncedFun = debounce(fun, 20);

  debouncedFun();
  debouncedFun();
  debouncedFun();

  assert.is(actual, expected);
});

Debounce.run();
