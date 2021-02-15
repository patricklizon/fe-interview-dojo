// Function could be wrapped with memoize for optimization

export const factorial = (x: number): number => (x ? x * factorial(x - 1) : 1);
