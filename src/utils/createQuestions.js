import _ from 'lodash';
import { Question } from './Question';
import { NOTES_BY_OCTAVE } from '../octaves/octaves';
import { mapOctaveIntegerToString } from './mapOctaveIntegerToString';
import { toTitleCase } from './toTitleCase';

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
  
  
  const questions = [];

  const NOTES = [
    'C', 'Csharp', 'D', 'Eflat',
    'E', 'F', 'Fsharp', 'G',
    'Aflat', 'A', 'Bflat', 'B'
  ];
  
  if(mode === 'octaves') {
    const newParams = {};
    Object.assign(newParams, params);
    delete newParams.selected;
    _.keys(newParams)

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
      const created_options = [];
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

          while(created_options.includes(optionNote)){
            optionNote = _.sample(optionPool);
          }
          created_options.push(optionNote)

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

//--------------------MODE: NOTES---------------------//

  
  if(mode === 'notes') {
    const newParams = {};
    Object.assign(newParams, params);
    delete newParams.selected;
    const selected_notes = [];
    let selected_octave = null;
    for(const property in newParams) {
      if(typeof newParams[property] == "boolean" && newParams[property]) {
        selected_notes.push(property);
      }
      // eslint-disable-next-line eqeqeq
      if(property == 'octave'){
        selected_octave = mapOctaveIntegerToString(newParams[property]);
      }
    }
    
    let notes_to_practice_count = null;
    if(selected_notes.length > 5) {
      notes_to_practice_count = 6;
    } else {
      notes_to_practice_count = selected_notes.length;
    }
    let notes_to_practice = _.sampleSize(selected_notes, notes_to_practice_count);
    while(notes_to_practice.length < 12) {
      notes_to_practice = notes_to_practice
      .concat(Array.from(notes_to_practice));
    }
    while(notes_to_practice.length > 12) {
      notes_to_practice.pop();
    }
    
    notes_to_practice = _.shuffle(notes_to_practice);
    
    for(const note of notes_to_practice) {
      let sound = {
        label: toTitleCase(note),
        soundFile: NOTES_BY_OCTAVE[selected_octave][toTitleCase(note)]
      }
      const answer = _.sample([1, 2, 3, 4]);

      const options = {};
      const created_options = [];
      for(let i = 1; i < 5; i++) {
        
        if(i === answer) {
          options[i] = {
            label: toTitleCase(note)
          }
          created_options.push(toTitleCase(note));
         
        } else {
          const optionPool = _.filter(NOTES, (element) => {
            return element !== toTitleCase(note);
          });
          let optionNote = _.sample(optionPool);
          while(created_options.includes(toTitleCase(optionNote))){
            optionNote = _.sample(optionPool);
          }
 
          created_options.push(toTitleCase(optionNote));
          

          
          options[i] = {
            label: toTitleCase(optionNote) 
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
  //console.log(questions)
  return questions;
}