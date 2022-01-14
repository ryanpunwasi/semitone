import { 
  PLAY_INTERACTIVE_PIANO_NOTE,
  CREATE_PRACTICE_SESSION,
  CLEAR_PRACTICE_SESSION,
  NEXT_QUESTION
} from './types';

import history from '../history';

export const playInteractivePianoNote = () => {
  return {
      type: PLAY_INTERACTIVE_PIANO_NOTE
  };
};

export const createPracticeSession = (mode) => {
  return {
    type: CREATE_PRACTICE_SESSION, 
    payload: mode
  }
}

export const clearPracticeSession = (id) => {
  return {
    type: CLEAR_PRACTICE_SESSION,
    payload: id
  }
}

export const nextQuestion = () => {
  return {
    type: NEXT_QUESTION
  }
}
