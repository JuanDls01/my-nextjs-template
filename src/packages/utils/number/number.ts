export const isNumber = (input: unknown): input is NonNullable<number> =>
  typeof input === "number" && Number.isFinite(input);

export const beginsWithNumber = (input: string) => /^[0-9]/.test(input);
