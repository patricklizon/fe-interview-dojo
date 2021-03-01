import { test } from "uvu";
import assert from "uvu/assert";

import { ArrayList } from "../../src/data-structures/array-list";

test("initializes empty instance", () => {
  const given = new ArrayList();

  assert.instance(given, ArrayList);
  assert.is(given.length, 0);
});

test("initializes instance with data", () => {
  const given = new ArrayList<number>({ 0: 10 });

  assert.is(given.length, 1);

  assert.is(given.get(0), 10);
});

test("pushes new elements", () => {
  const given = new ArrayList<number>();

  assert.is(given.get(0), undefined);
  assert.is(given.get(1), undefined);
  assert.is(given.get(2), undefined);

  given.push(101);

  assert.is(given.length, 1);
  assert.is(given.get(0), 101);
  assert.is(given.get(1), undefined);
  assert.is(given.get(2), undefined);

  given.push(202);

  assert.is(given.length, 2);
  assert.is(given.get(0), 101);
  assert.is(given.get(1), 202);
  assert.is(given.get(2), undefined);
});

test("deletes first element", () => {
  const data = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    4: "e",
    5: "f",
  };
  const given = new ArrayList<string>(data);
  const idx = 0;

  assert.is(given.length, 6);
  assert.is(given.get(idx), "a");

  given.delete(idx);

  assert.is(given.get(idx), "b");
  assert.is(given.length, 5);
});

test("pops last element", () => {
  const given = new ArrayList<string>({ 0: "a", 1: "b", 2: "c" });

  assert.is(given.length, 3);

  const popped = given.pop();

  assert.is(popped, "c");
  assert.is(given.get(0), "a");
  assert.is(given.get(1), "b");
  assert.is(given.get(2), undefined);
  assert.is(given.length, 2);
});

test("deletes element at index", () => {
  const data = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    4: "e",
    5: "f",
  };
  const given = new ArrayList<string>(data);
  const idx = 3;

  assert.is(given.length, 6);
  assert.is(given.get(idx), "d");

  given.delete(idx);

  assert.is(given.get(idx), "e");
  assert.is(given.get(idx + 1), "f");
  assert.is(given.get(idx + 2), undefined);
  assert.is(given.length, 5);
});

test("deletes multiple elements", () => {
  const data = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    4: "e",
    5: "f",
  };
  const given = new ArrayList<string>(data);
  const idx = 3;

  assert.is(given.length, 6);
  assert.is(given.get(idx), "d");
  assert.is(given.get(idx + 1), "e");
  assert.is(given.get(idx + 2), "f");

  given.delete(idx);
  given.delete(idx);
  given.delete(idx);

  assert.is(given.get(idx), undefined);
  assert.is(given.get(idx + 1), undefined);
  assert.is(given.get(idx + 2), undefined);
  assert.is(given.length, 3);
});

test("inserts element at index", () => {
  const data = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    4: "e",
    5: "f",
  };
  const given = new ArrayList<string>(data);
  const idx = 3;

  assert.is(given.length, 6);
  assert.is(given.get(idx), "d");

  given.insert("x", idx);

  assert.is(given.get(idx), "x");
  assert.is(given.get(idx + 1), "d");
  assert.is(given.get(idx + 2), "e");
  assert.is(given.get(idx + 3), "f");
  assert.is(given.get(idx + 4), undefined);
  assert.is(given.length, 7);
});

test.run();
