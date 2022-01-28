export const toStringNotation = string => {
    /**
   * Returns a new formatted string froms string, where the characters '♯'
   * and '♭' are replaced by 'sharp' and 'flat', respectively.
   * 
   * >>> toNoteNotation('C♯')
   * 'Csharp'
   * 
   * >>> toNoteNotation('E♭')
   * 'Eflat'
   * */

  let newString;
  if(string.includes('♯')) {
    newString = string.substring(0, 1) + 'sharp';
  } else if (string.includes('♭')) {
    newString = string.substring(0, 1) + 'flat';
  } else {
    return string;
  }
  return newString;
}