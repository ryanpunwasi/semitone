import _ from 'lodash';
import { Question } from './Question';
import { NOTES_BY_OCTAVE } from '../octaves/octaves';
import { mapOctaveIntegerToString } from './mapOctaveIntegerToString';

export const createQuestions = (mode, params) => {
  /** 
   * Return an array containing a series of 12 Question objects. 
   * mode denotes which modality questions should be generated for, 'notes' | 'octaves' | 'scales' | 'chords'
   * params is an object containing form data
   * Each Question has three properties:
   * 1. sound - An object containing a label property and a soundFile property
   * 2. answer - A string[int] denoting which option is the correct answer, 0 < answer <= 4
   * 3. options - An object containing a label property and a soundFile property
  **/
  
  const newParams = {};
  Object.assign(newParams, params);
  delete newParams.selected;
  _.keys(newParams)

  const questions = [];

  const NOTES = [
    'C', 'Csharp', 'D', 'Dsharp',
    'E', 'F', 'Fsharp', 'G',
    'Aflat', 'A', 'Bflat', 'B'
  ];
  
  if(mode === 'octaves') {
    let notes_to_practice = _.sampleSize(NOTES, 4);
    notes_to_practice = notes_to_practice
      .concat(Array.from(notes_to_practice))
      .concat(Array.from(notes_to_practice));

    let selected_octaves = [];

    for (const octave in newParams) {
      if(newParams[octave]) {
        selected_octaves.push(`${octave}`);
      }
    }

    if(selected_octaves.length < 2) {
      return;
    }

    selected_octaves = _.sampleSize(selected_octaves, 3);

    for (const note of notes_to_practice) {
      let raw_octave = _.sample(selected_octaves);
      let octave = mapOctaveIntegerToString(raw_octave);
      let sound = { 
        label: note,
        soundFile: NOTES_BY_OCTAVE[octave][note] 
      };
      const answer = _.sample([1, 2, 3, 4]);
      const options = {};
      for(let i = 1; i < 5; i++) {
        if(i === answer) {
          const validOctaves = _.difference(selected_octaves, [raw_octave]);
          options[i] = {
            label: note,
            soundFile: NOTES_BY_OCTAVE[mapOctaveIntegerToString(_.sample(validOctaves))][note]
          }
        } else {
          let optionPool = _.difference(NOTES, notes_to_practice);
          let optionNote = _.sample(optionPool);

          options[i] = {
            label: optionNote,
            soundFile: NOTES_BY_OCTAVE[mapOctaveIntegerToString(_.sample(selected_octaves))][optionNote] 
          }     
        }
      }

      const question = new Question(
        sound,
        answer,
        options
      );

      questions.push(question);
    }
  }
  
  return questions;
}