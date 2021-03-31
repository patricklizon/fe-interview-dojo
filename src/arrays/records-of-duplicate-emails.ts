type Inp = { email: string; contacts: string[] }[];
type Duplicates = { [email: string]: string[] };

export const recordOfDuplicateEmails = (data: Inp): Duplicates => {
  const ret = new Map<string, string[]>();

  for (const { email, contacts } of data) {
    for (const c of contacts) {
      ret.set(c, [...(ret.get(c) ?? []), email]);
    }
  }

  for (const [e, es] of ret.entries()) {
    if (es.length < 2) ret.delete(e);
  }

  return Object.fromEntries(ret.entries());
};
