export const isValidOctave = (octave) => {
  /**
   * Returns true is octave is equal to '1', 2', '3', '4', or '5'. 
   * If otherwise, return false.
   */

  if(octave === '1' || octave === '2' || octave === '3' || octave === '4' || octave === '5') {
    return true;
  }
  return false;
}