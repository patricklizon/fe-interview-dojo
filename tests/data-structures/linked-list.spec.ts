import { test } from "uvu";
import assert from "uvu/assert";

import { LinkedList } from "../../src/data-structures/linked-list";

test("initializes empty instance", () => {
  const given = new LinkedList();

  assert.instance(given, LinkedList);
  assert.is(given.length, 0);
  assert.is(given.head, undefined);
  assert.is(given.tail, undefined);
});

test("pushes nodes", () => {
  const given = new LinkedList<number>();

  assert.is(given.length, 0);
  assert.is(given.head, undefined);

  given.push(1);

  assert.is(given.length, 1);
  assert.is(given.head?.value, 1);
  assert.is(given.tail?.value, 1);
  assert.is(given.head?.next, undefined);
  assert.is(given.tail?.next, undefined);

  given.push(2);

  assert.is(given.length, 2);
  assert.is(given.head?.value, 1);
  assert.is(given.tail?.value, 2);
  assert.is(given.head?.next?.value, 2);
  assert.is(given.tail?.next, undefined);
});

test("pops nodes", () => {
  const given = new LinkedList<string>();

  given.push("a");
  given.push("b");
  given.push("c");

  assert.is(given.length, 3);

  const poppedC = given.pop();

  assert.is(poppedC, "c");
  assert.is(given.length, 2);

  const poppedB = given.pop();

  assert.is(poppedB, "b");
  assert.is(given.length, 1);

  const poppedA = given.pop();

  assert.is(poppedA, "a");
  assert.is(given.length, 0);
});

test("gets nodes", () => {
  const given = new LinkedList<string>();
  const data = ["a", "b", "c"];

  data.forEach((v, idx) => {
    given.push(v);
    assert.is(given.get(idx), data[idx], "does not get right value");
  });

  assert.is(given.length, data.length);
});

test("deletes first node", () => {
  const given = new LinkedList<string>();
  const data = ["a", "b"];
  const idx = 0;

  data.forEach((v) => given.push(v));

  assert.is(given.length, data.length);

  const deletedA = given.delete(0);

  assert.is(deletedA, data[idx], "returns wrong element");
  assert.is(given.get(idx), data[idx + 1], "does not removes element");
  assert.is(given.length, data.length - 1, "does not changes size");
  assert.is(given.tail?.value, data[idx + 1], "does not updates tail");
});

test("deletes last node", () => {
  const given = new LinkedList<string>();
  const data = ["a", "b", "c"];
  const idx = data.length - 1;

  data.forEach((v) => given.push(v));

  assert.is(given.length, data.length);

  const deleted = given.delete(idx);

  assert.is(deleted, data[idx], "does not returns correct element");
  assert.is(given.get(idx), undefined, "does not removes element");
  assert.is(given.get(0), data[0], "changes wrong element");
  assert.is(given.get(1), data[1], "changes wrong element");
  assert.is(given.tail?.value, data[1], "does not updates tail");
  assert.is(given.length, data.length - 1, "does not changes size");
});

test("deletes node", () => {
  const given = new LinkedList<string>();
  const data = ["a", "b", "c", "d", "e"];
  const idx = 2;

  data.forEach((v) => given.push(v));

  const deleted = given.delete(idx);
  const next = given.get(idx);

  assert.is(deleted, data[idx], "does not returns correct element");
  assert.is(next, data[idx + 1], "does not removes element");
  assert.is(given.length, data.length - 1, "does not changes size");
  assert.is(given.head?.value, data[0], "changes head");
  assert.is(given.tail?.value, data[data.length - 1], "changes tail");
});

test.run();
