import assert from "uvu/assert";
import { test } from "uvu";

import { BinarySearchTree } from "../../src/data-structures/binary-search-tree";

test("creates correct tree", () => {
  const data = [3, 7, 4, 6, 5, 1, 10, 2, 9, 8];
  const given = new BinarySearchTree<number>();

  data.map((x) => given.add(x));

  assert.is(given.toObject()?.value, 3);
});

test.run();
