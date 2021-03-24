export const subordinateIds = (data: { [id: string]: string[] }) => (
  id: string
): string[] => {
  const arr = data[id];
  if (!arr) return [];
  return [...arr, ...arr.flatMap(subordinateIds(data))];
};
