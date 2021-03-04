// Function could be wrapped with memoize for optimization

export const fibonacci = (x: number): number => {
  if (x < 1) return 0;
  if (x < 2) return 1;

  return fibonacci(x - 1) + fibonacci(x - 2);
};

export const fibonacciSequence = (size: number): number[] => {
  if (size < 1) return [];
  const result: number[] = [];

  let i = 1;
  while (i <= size) {
    // @ts-expect-error accessing numbers
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    result.push(i <= 2 ? 1 : result[i - 2] + result[i - 3]);
    i += 1;
  }

  return result;
};
