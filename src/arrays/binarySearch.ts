// 1. Let min = 1 and max = n.
// 2. Guess the average of max and min, rounded down so that it is an integer.
// 3. If you guessed the number, stop. You found it!
// 4. If the guess was too low, set min to be one larger than the guess.
// 5. If the guess was too high, set max to be one smaller than the guess.
// 6. Go back to step two.

export const binarySearch = (xs: number[], num: number): number => {
  let min = 0;
  let max = xs.length;

  while (min <= max) {
    const average = Math.floor((min + max) / 2);
    const value = xs[average] as number;

    if (value === num) return average;

    if (value < num) {
      min = average + 1;
    } else {
      max = average - 1;
    }
  }

  return -1;
};
