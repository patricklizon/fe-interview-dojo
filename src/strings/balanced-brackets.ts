export const balancedBrackets = (s: string): boolean => {
  const bracket = new Map<string, string>([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);
  const { length } = s;
  const halfSize = length / 2;
  if (halfSize - Math.floor(halfSize) !== 0) return false;

  const hasDifferentClosing = (i: number): boolean =>
    bracket.get(s.charAt(i)) !== s.charAt(length - 1 - i);

  for (let i = 0; i < halfSize; i += 1)
    if (hasDifferentClosing(i)) return false;

  return true;
};
