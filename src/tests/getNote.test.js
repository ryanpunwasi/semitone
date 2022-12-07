import { getNote } from "../utils/getNote";
import { NOTES } from "../mocks/notes";

describe("getNote", () => {
  it("returns note object if valid note is given", () => {
    const actual = getNote(NOTES, "C", 3, "natural");
    const expected = {
      id: 25,
      octave_id: 3,
      letter: "C",
      accidental: "natural",
      src: "https://res.cloudinary.com/dv0dqorkh/video/upload/v1664597748/semitone/octave-3/C_bsm4hi.mp3",
    };
    expect(expected).toEqual(actual);
  });

  it("returns note object if valid note is given with no accidental specified", () => {
    const actual = getNote(NOTES, "C", 3);
    const expected = {
      id: 25,
      octave_id: 3,
      letter: "C",
      accidental: "natural",
      src: "https://res.cloudinary.com/dv0dqorkh/video/upload/v1664597748/semitone/octave-3/C_bsm4hi.mp3",
    };
    expect(expected).toEqual(actual);
  });

  it("returns undefined if invalid octave is given", () => {
    const actual = getNote(NOTES, "C", 0);
    const expected = undefined;
    expect(expected).toEqual(actual);
  });

  it("returns undefined if invalid letter is given", () => {
    const actual = getNote(NOTES, "Z", 3);
    const expected = undefined;
    expect(expected).toEqual(actual);
  });

  it("returns undefined if invalid accidental is given", () => {
    const actual = getNote(NOTES, "C", 1, "accidental");
    const expected = undefined;
    expect(expected).toEqual(actual);
  });
});
