export const lowerCaseOrBlank = (val?: string | null) =>
  val?.toLowerCase() ?? "";

export const upperCaseOrBlank = (val?: string | null) =>
  val?.toUpperCase() ?? "";
