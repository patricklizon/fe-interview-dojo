// 1. The first element in the array is considered as sorted, even if it is an unsorted array.
// 2. each element in the array is checked with the previous elements, resulting in a growing sorted output list.
// 3. With each iteration, the sorting algorithm removes one element at a time and finds the appropriate location within the sorted array and inserts it there.
// 4. The iteration continues until the whole list is sorted.

export const insertionSort = (xs: number[]): number[] => {
  const { length } = xs;
  if (!length) return xs;

  for (let i = 1; i < length; i++) {
    for (let j = 0; j < length; j++) {
      // @ts-expect-error asserting number
      if (xs[i] < xs[j]) {
        const [spliced] = xs.splice(i, 1);
        // @ts-expect-error asserting number
        xs.splice(j, 0, spliced);
      }
    }
  }

  return xs;
};
