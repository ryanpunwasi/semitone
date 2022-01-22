export const toStringNotation = string => {
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