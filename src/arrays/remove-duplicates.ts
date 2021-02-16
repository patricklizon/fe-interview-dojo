export const removeDuplicates = <T extends any[]>(xs: T): T => {
  return (Array.from(new Set(xs)) as unknown) as T;
};
