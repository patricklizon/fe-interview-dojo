// 1. Choose the largest coin.
// 2. If it's possible subtract it from given amount,
//    otherwise try with next coin.
// 3. Return counted coins.

export const makeChange = (denominations: number[], given: number): number => {
  const coins = denominations.sort((x, y) => x + y);
  let count = 0;
  let idx = 0;

  while (given > 0 && coins[idx]) {
    const coin = coins[idx] as number;
    if (given % coin < given) {
      given -= coin;
      count += 1;
    } else {
      idx += 1;
    }
  }

  return count;
};
