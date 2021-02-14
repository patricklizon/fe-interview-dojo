export const promisify = <T extends (...args: any) => any>(
  cb: T
): ((...args: Parameters<T>) => Promise<T>) => {
  return function (this: unknown, ...args: Parameters<T>) {
    // eslint-disable-next-line no-invalid-this
    return new Promise<T>((resolve) => resolve(cb.apply(this, args)));
  };
};
