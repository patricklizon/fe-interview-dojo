// Function could be wrapped with memoize for optimization

export const fibonacci = (x: number): number => {
  if (x < 1) return 0;
  if (x < 2) return 1;

  return fibonacci(x - 1) + fibonacci(x - 2);
};
