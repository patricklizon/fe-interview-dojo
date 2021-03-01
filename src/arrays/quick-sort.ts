// 1. Select the pivot - last element in the array
// 2. Divide array into two arrays by placing elements lesser then pivot
//    to the left and elements higher then pivot to the right
// 3. Call quickSort on both lists

export const quickSort = (xs: number[]): number[] => {
  const pivot = xs.pop();

  if (pivot === undefined) return xs;

  const ls: number[] = [];
  const rs: number[] = [];

  xs.forEach((x) => (x < pivot ? ls.push(x) : rs.push(x)));

  return [...quickSort(ls), pivot, ...quickSort(rs)];
};
