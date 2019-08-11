
// Regex
export const ARABIC_VALIDATOR = "[\u0600-\u06FF ]*";
export const ARABIC_ENGLISH_VALIDATOR = "[a-zA-Z\u0600-\u06FF ]*";
export const MOBILE_NUMBER_VALIDATOR = "[0-9-\u0660-\u0669]{11}";

// constants
// export const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const MONTHS = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
}

// Get the days count in a given month
export function daysInMonth(m) {
  switch (m) {
    case "February":
      return 29;
    case "September":
    case "April":
    case "June":
    case "November":
      return 30;
    default:
      return 31;
  }
}

// Generate a range of numbers
export function range(start, stop, step) {
  return Array.from(
    { length: (stop - start) / step + 1 },
    (_, i) => start + i * step
  );
}
