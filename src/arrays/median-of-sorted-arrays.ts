// Given two sorted arrays find the median element.

export const medianOfSortedArrays = (xs: number[], ys: number[]): number => {
  let merged: number[] = [];
  const size = xs.length + ys.length;
  const middle = Math.floor(size / 2);

  if (!middle) return 0;

  const isNotDone = (): boolean =>
    !!(xs.length && ys.length) && merged.length < middle + 1;

  while (isNotDone()) {
    // @ts-expect-error: accessing numbers
    xs[0] < ys[0] ? merged.push(xs.shift()) : merged.push(ys.shift());
  }

  merged = [...merged, ...xs, ...ys];

  const isOdd = size % 2;

  // @ts-expect-error: accessing numbers
  return isOdd
    ? merged[middle]
    : // @ts-expect-error: accessing numbers
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      (merged[middle - 1] + merged[middle]) / 2;
};
