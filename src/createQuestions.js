import _ from 'lodash';
import one from './octaves/one';
// import two from './octaves/two';
// import three from './octaves/three';
// import four from './octaves/four';
// import five from './octaves/five';

export const createQuestions = (mode, params) => {
  // Return an object containing a series of 12 questions

  const questions = {};

  const notes = _.sampleSize(['C', 'Csharp', 'D', 'Dsharp', 'E', 'F', 'Fsharp', 'G', 'Aflat', 'A', 'Bflat', 'B'], 4);
  if(mode === 'octaves') {
    const selected = [];
    for (const octave in params) {
      if(params[octave]) {
        selected.push(`${octave}`);
      }
    }
    for (let i = 0; i < 2; i++) {
      const question = {
        note: _.sample(notes),
        answer: _.sample([1, 2, 3, 4]),
        options: {}
      };
      question.sound = one['C']
      questions[i] = question;
    }

  console.log(selected, notes, questions);
  }
  
  return questions;
}

// 1. Extract octave numbers to array DONE
// 2. Select 4 random notes DONE 
// 3. Import 4 Notes
// 4.
// 5. for each note, generate 3 notes(with annotations and sound) one of which is the same note but in a different
// octave in the octave array
//6. Import notes
// 7. 