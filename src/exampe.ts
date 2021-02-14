export const flatten = <T>(xs: T[]): T[] =>
  xs.reduce<T[]>(
    (acc, x) => (Array.isArray(x) ? [...acc, ...flatten(x)] : [...acc, x]),
    []
  );
