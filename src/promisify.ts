export const promisify = <T extends (...args: any) => any>(
  cb: T
): ((...args: Parameters<T>) => Promise<ReturnType<T>>) => {
  return function (this: unknown, ...args: Parameters<T>) {
    return new Promise<ReturnType<T>>((resolve) =>
      // eslint-disable-next-line no-invalid-this
      resolve(cb.apply(this, args))
    );
  };
};
