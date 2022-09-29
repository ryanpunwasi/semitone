export const isValidOctave: (octave: string) => boolean = (octave: string) => {
  /**
   * Returns true is octave is equal to '1', 2', '3', '4', or '5'.
   * If otherwise, return false.
   */
  const valid = [1, 2, 3, 4, 5];
  const parsed = parseInt(octave);
  return valid.includes(parsed);
};
