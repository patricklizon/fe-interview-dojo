// 1. Choose the largest coin.
// 2. If it's possible subtract it from given amount,
//    otherwise try with next coin.
// 3. Return counted coins.

export const makeChange = (denominations: number[], amount: number): number => {
  if (amount === 0) return 0;
  let min = 0;

  denominations.forEach((coin) => {
    if (amount - coin < 0) return;
    const localMin = makeChange(denominations, amount - coin);
    if (min === 0 || localMin < min) min = localMin + 1;
  });

  return min;
};
