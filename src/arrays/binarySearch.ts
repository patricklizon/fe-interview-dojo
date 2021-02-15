// 1. Let min = 0 and max = n.
// 2. Guess the average of max and min, rounded down so that it is an integer.
// 3. If you guessed the number, stop. You found it!
// 4. If the guess was too low, set min to be one larger than the guess.
// 5. If the guess was too high, set max to be one smaller than the guess.
// 6. Go back to step two.

export const binarySearch = (xs: number[], num: number): number => {
  let min = 0;
  let max = xs.length;

  while (min < max) {
    const idx = Math.floor((min + max) / 2);
    const value = xs[idx];

    if (value === num) return idx;
    if (!value) throw new Error(`Expected value, got undefined. idx: ${idx}`);

    value < num ? (min = idx + 1) : (max = idx - 1);
  }

  return -1;
};
