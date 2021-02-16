export const bubbleSort = (xs: number[]): number[] => {
  for (let i = 0; i < xs.length; i++) {
    for (let j = i + 1; j < xs.length; j++) {
      // @ts-expect-error accessing elements that are numbers
      if (xs[i] > xs[j]) [xs[i], xs[j]] = [xs[j], xs[i]];
    }
  }

  return xs;
};
