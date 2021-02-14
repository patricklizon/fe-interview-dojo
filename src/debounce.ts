// Implement debounce

export const debounce = <T extends (args: any) => any>(
  fun: T,
  timeout: number
): T => {
  let timeoutId: NodeJS.Timeout | undefined;
  return function (this: T, ...rest) {
    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(
      () =>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        fun.apply(
          // eslint-disable-next-line no-invalid-this
          this,
          rest
        ),
      timeout
    );
    timeoutId = undefined;
  } as T;
};
