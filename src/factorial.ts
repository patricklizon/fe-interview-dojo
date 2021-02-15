export const factorial = (x: number): number => {
  if (!x) return 1;
  return x * factorial(x - 1);
};
