export const toNoteNotation = (string) => {
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