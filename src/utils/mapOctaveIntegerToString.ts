export const mapOctaveIntegerToString: (int: string) => string | void = (
  int: string
) => {
  switch (int) {
    case "1":
      return "one";
    case "2":
      return "two";
    case "3":
      return "three";
    case "4":
      return "four";
    case "5":
      return "five";
    default:
      return;
  }
};
