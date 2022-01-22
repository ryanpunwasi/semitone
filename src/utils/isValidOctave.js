export const isValidOctave = (octave) => {
  if(octave === '1' || octave === '2' || octave === '3' || octave === '4' || octave === '5') {
    return true;
  }
  return false;
}