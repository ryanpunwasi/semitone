import _ from 'lodash';
import three from './octaves/3';

function createQuestions(mode, params) {
  const notes = _.sampleSize(['C', 'Csharp', 'D', 'Eflat', 'E', 'F', 'Fsharp', 'G', 'Aflat', 'A', 'Bflat', 'B'], 10);
  if(mode === 'octaves') {
    const selected = [];
    for (const octave in params) {
      if(params[octave]) {
        selected.push(`${octave}`);
      }
    }
  }
}

// 1. Extract octave numbers to array DONE
// 2. Select 10 random notes DONE 
// 3. Import 10 Notes
// 4.
// 5. for each note, generate 4 notes(with annotations and sound), one of which is the same note but in a different
// octave in the octave array