export const firstNonDuplicate = (s: string): string | undefined => {
  if (s.length < 2) return s.toLowerCase();
  const cs = s.toLowerCase().split("");
  for (const l of cs) if (cs.indexOf(l) === cs.lastIndexOf(l)) return l;
  return undefined;
};
