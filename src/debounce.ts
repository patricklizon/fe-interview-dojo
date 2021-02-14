export const debounce = <T extends (args: any) => unknown>(
  fun: T,
  timeout: number
): T => {
  let timeoutId: NodeJS.Timeout | undefined;

  return function (this: T, ...args: Parameters<T>) {
    // eslint-disable-next-line no-invalid-this
    const deferredFun = () => fun.apply(this, args);
    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(deferredFun, timeout);
  } as T;
};
