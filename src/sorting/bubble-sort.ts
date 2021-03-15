// 1. Loop over each element of array.
// 2. For each element (idx) loop over element remaining elements starting with next one (idx + 1).
// 3. If element (idx) is higher than sequent element (idx + 1) swap them places.
// 4. Continue looping and return the array.

export const bubbleSort = (xs: number[]): number[] => {
  for (let i = 0; i < xs.length; i++) {
    let swapped = false;

    for (let j = i + 1; j < xs.length; j++) {
      // @ts-expect-error accessing elements that are numbers
      if (xs[i] > xs[j]) {
        // @ts-expect-error accessing elements that are numbers
        [xs[i], xs[j]] = [xs[j], xs[i]];
        swapped = true;
      }
    }

    // array is already sorted
    if (!swapped) break;
  }

  return xs;
};
