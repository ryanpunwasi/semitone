import { PLAY_INTERACTIVE_PIANO_NOTE, CREATE_PRACTICE_SESSION} from './types';
import history from '../history';

export const playInteractivePianoNote = () => {
  return {
      type: PLAY_INTERACTIVE_PIANO_NOTE
  };
};

export const createPracticeSession = () => {
  return {
    type: CREATE_PRACTICE_SESSION, 
    payload: 'octaves'
  }
}
