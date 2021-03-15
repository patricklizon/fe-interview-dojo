// 1. Find middle index.
// 2. Slice array to 'left' and 'right'.
// 3. Keep slicing both arrays until they will have 1 or 0 elements.
// 4. Merge arrays:
// 5. Let 'left pointer' (idx of left) and 'right pointer' (idx of right) = 0.
// 6. If 'left value' is higher than 'right value' save it to new array and increment left index,
//    otherwise do it for 'right value'.
// 7. Repeat until 'left pointer' or 'right pointer' will be higher then size of its array.
// 8. Concatenate 'result array' with slices of 'left array' and 'right array'.

const merge = (left: number[], right: number[]): number[] => {
  const result = [];

  while (left.length && right.length) {
    // @ts-expect-error accessing numbers
    left[0] <= right[0]
      ? result.push(left.shift())
      : result.push(right.shift());
  }

  // @ts-expect-error return array of numbers
  return [...result, ...left, ...right];
};

export const mergeSort = (xs: number[]): number[] => {
  if (xs.length <= 1) return xs;

  const middleIdx = Math.floor(xs.length / 2);
  const left = xs.slice(0, middleIdx);
  const right = xs.slice(middleIdx);

  return merge(mergeSort(left), mergeSort(right));
};
