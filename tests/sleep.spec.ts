import { test } from "uvu";
import assert from "uvu/assert";
import FakeTimers from "@sinonjs/fake-timers";

import { sleep } from "../src/sleep";

let clock: FakeTimers.InstalledClock;

test.before(() => {
  clock = FakeTimers.install();
});

test.after(() => {
  clock.uninstall();
});

test("pauses function execution for a specified time", async () => {
  let count = 0;
  const counter = async () => {
    await sleep(50);
    count += 1;
  };

  await counter();

  clock.tick(49);

  assert.is(count, 0);

  clock.tick(50);

  assert.is(count, 1);
});

// TODO: Enable if possible
// test.run();
