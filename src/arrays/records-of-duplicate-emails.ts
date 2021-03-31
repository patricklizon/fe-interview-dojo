type Inp = { email: string; contacts: string[] }[];
type Duplicates = { [email: string]: string[] };

export const recordOfDuplicateEmails = (data: Inp): Duplicates => {
  const ret: Duplicates = {};

  for (const { email, contacts } of data) {
    for (const contact of contacts) {
      ret[contact] = [...(ret[contact] ?? []), email];
    }

    // we could delete key here, but it won't work for edge case data
    // which is one entry with multiple contacts
  }

  const entries = Object.entries(ret).filter(
    ([_, emails]) => emails.length > 1
  );

  return Object.fromEntries(entries);
};
