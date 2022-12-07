export const getNote = (notes, letter, octave, accidental = "natural") => {
  const notesInGivenOctave = notes[`${octave}`];
  if (notesInGivenOctave === undefined) return;
  return notesInGivenOctave.find(
    note => note.letter === letter && note.accidental === accidental
  );
};
