export const toNoteNotation = (string) => {
  /**
   * Returns a new formatted string froms string, where the words 'sharp'
   * and 'flat' are replaced by '♯' and '♭', respectively.
   * 
   * >>> toNoteNotation('Csharp')
   * 'C♯'
   * 
   * >>> toNoteNotation('Eflat')
   * 'E♭'
   * */

  let newString;
  if(string.includes('sharp')) {
    newString = string.substring(0, 1) + '♯';
  } else if (string.includes('flat')) {
    newString = string.substring(0, 1) + '♭';
  } else {
    return string;
  }
  return newString;
}