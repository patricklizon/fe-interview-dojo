// Function could be wrapped with memoize for optimization

export const factorial = (x: number): number =>
  x < 2 ? 1 : x * factorial(x - 1);
