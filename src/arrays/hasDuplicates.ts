export const hasDuplicates = <T extends Array<any>>(xs: T): boolean => {
  const cache = new Set();

  for (const x of xs) {
    if (cache.has(x)) return true;
    cache.add(x);
  }

  return false;
};
