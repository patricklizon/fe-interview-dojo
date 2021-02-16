const merge = (left: number[], right: number[]): number[] => {
  const result = [];
  let lIdx = 0;
  let rIdx = 0;

  while (lIdx < left.length && rIdx < right.length) {
    // @ts-expect-error accessing numbers
    if (left[lIdx] < right[rIdx]) {
      result.push(left[lIdx]);
      lIdx += 1;
    } else {
      result.push(right[rIdx]);
      rIdx += 1;
    }
  }

  // @ts-expect-error return array of numbers
  return result.concat(left.slice(lIdx)).concat(right.slice(rIdx));
};

export const mergeSort = (xs: number[]): number[] => {
  if (xs.length <= 1) return xs;

  const middle = Math.floor(xs.length / 2);
  const left = xs.slice(0, middle);
  const right = xs.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};
