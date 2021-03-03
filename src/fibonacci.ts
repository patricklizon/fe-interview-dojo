// Function could be wrapped with memoize for optimization

export const fibonacci = (x: number): number => {
  if (x < 1) return 0;
  if (x < 2) return 1;

  return fibonacci(x - 1) + fibonacci(x - 2);
};

export const fibonacciSequence = (size: number): number[] => {
  const result: number[] = [];

  let i = 1;
  while (i <= size) {
    if (i <= 2) {
      result.push(1);
    } else {
      // @ts-expect-error accessing numbers
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      const sum = result[i - 2] + result[i - 3];
      result.push(sum);
    }

    i++;
  }

  return result;
};
