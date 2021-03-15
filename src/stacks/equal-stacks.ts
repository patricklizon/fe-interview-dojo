const numToSum = (sum: number, x: number): number => (sum += x);
const stackToHeight = (s: number[]): number => s.reduce(numToSum, 0);
const equalTo = (compare: number) => (x: number): boolean => compare === x;

export const equalStacks = (
  h1: number[],
  h2: number[],
  h3: number[]
): number => {
  const stacks: Parameters<typeof equalStacks> = [h1, h2, h3];
  const heights: number[] = stacks.map(stackToHeight);
  const maxHeight = Math.max(...heights);
  const maxIdx = heights.indexOf(maxHeight);

  if (heights.every(equalTo(maxHeight))) return maxHeight;

  stacks[maxIdx]?.shift();

  return equalStacks(...stacks);
};
