import { isValidOctave } from "../utils/isValidOctave";

describe("isValidOctave", () => {
  it("returns true if given the string value 1", () => {
    const actual = isValidOctave("1");
    const expected = true;
    expect(expected).toBe(actual);
  });

  it("returns true if given the string value of 5", () => {
    const actual = isValidOctave("5");
    const expected = true;
    expect(expected).toBe(actual);
  });

  it("returns false if given the string value of 0", () => {
    const actual = isValidOctave("0");
    const expected = false;
    expect(expected).toBe(actual);
  });

  it("returns false if given the string value of 6", () => {
    const actual = isValidOctave("6");
    const expected = false;
    expect(expected).toBe(actual);
  });

  it("returns false if given the string value of a", () => {
    const actual = isValidOctave("a");
    const expected = false;
    expect(expected).toBe(actual);
  });
});
