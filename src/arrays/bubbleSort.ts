export const bubbleSort = (xs: number[]): number[] => {
  for (let i = 0; i < xs.length; i++) {
    for (let j = i + 1; j < xs.length; j++) {
      // @ts-expect-error elements are numbers
      if (xs[i] > xs[j]) {
        const _i = xs[i];
        // @ts-expect-error element is number
        xs[i] = xs[j];
        // @ts-expect-error element is number
        xs[j] = _i;
      }
    }
  }

  return xs;
};
