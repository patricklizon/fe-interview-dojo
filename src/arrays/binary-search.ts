// 1. Let min = 0 and max = size of array.
// 2. Calculate the average of max and min, rounded down so that it is an integer. It's our 'pointer' (idx) to array element.
// 3. If pointed value is equal to searched number, stop. You found it!
// 4. If pointed value is too low, set min to be one larger than the guess. (idx + 1).
// 5. If pointed value is too high, set max to be one smaller than the guess. (idx - 1).
// 6. Go back to step two.
// 7. If element was not found return -1.

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
