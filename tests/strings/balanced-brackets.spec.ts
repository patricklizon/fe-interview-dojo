import assert from "uvu/assert";
import { test } from "uvu";

import { balancedBrackets } from "../../src/strings/balanced-brackets";

test("is balanced", () => {
  assert.is(balancedBrackets(""), true);
  assert.is(balancedBrackets("{[()]}"), true);
  assert.is(balancedBrackets("{{[[(())]]}}"), true);
});

test("is not balanced", () => {
  assert.is(balancedBrackets("{]"), false);
  assert.is(balancedBrackets("{[(]]}"), false);
});

test("handles wrongly formatted string", () => {
  assert.is(balancedBrackets("{}]"), false);
  assert.is(balancedBrackets("{"), false);
  assert.is(balancedBrackets("{[]()[]}"), false);
  assert.is(balancedBrackets("{[a()a]}"), false);
});

test.run();
