import { isValidOctave } from "../utils/isValidOctave";

describe("isValidOctave", () => {
  it("returns true is given the string value of the integers 1 to 5", () => {
    const actual = isValidOctave("1");
    const expected = true;
    expect(expected).toBe(actual);
  });
});
