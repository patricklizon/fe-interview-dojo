export const memoize = <T extends (...args: any) => unknown>(fn: T): T => {
  const cache: Map<string, ReturnType<T>> = new Map();

  return function (this: unknown, ...args: unknown[]) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);

    const result = fn.apply(
      // eslint-disable-next-line no-invalid-this
      this,
      args
    ) as ReturnType<T>;
    cache.set(key, result);

    return result;
  } as T;
};
