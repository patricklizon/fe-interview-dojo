export const balancedBrackets = (s: string): boolean => {
  const bracket = new Map<string, string>([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);
  const { length } = s;

  if (length - Math.floor(length) !== 0) return false;

  const cs = s.split("");
  const stack: string[] = [];

  for (const c of cs) {
    const opening = bracket.get(c);
    if (opening) {
      stack.push(c);
      continue;
    }

    const [head] = stack.slice(-1);
    if (!head) return false;

    if (bracket.get(head) !== c) return false;

    stack.pop();
  }

  return !stack.length;
};
