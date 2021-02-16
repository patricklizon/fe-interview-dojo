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
