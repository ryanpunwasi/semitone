import _ from 'lodash';
import three from './octaves/three';

export const createQuestions = (mode, params) => {
  const notes = _.sampleSize(['C', 'Csharp', 'D', 'Eflat', 'E', 'F', 'Fsharp', 'G', 'Aflat', 'A', 'Bflat', 'B'], 4);
  if(mode === 'octaves') {
    const selected = [];
    for (const octave in params) {
      if(params[octave]) {
        selected.push(`${octave}`);
      }
    }

  console.log(selected, notes);
  }
  
}

// 1. Extract octave numbers to array DONE
// 2. Select 5 random notes DONE 
// 3. Import 5 Notes
// 4.
// 5. for each note, generate 4 notes(with annotations and sound), one of which is the same note but in a different
// octave in the octave array