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

export const createPracticeSession = (mode, formValues) => async (dispatch) => {
  dispatch({
    type: CREATE_PRACTICE_SESSION, 
    payload: {
      mode, 
      formValues
    }
  });

  history.push('/octaves/practice');

};

export const clearPracticeSession = () => {
  return { 
    type: CLEAR_PRACTICE_SESSION 
  };
}

export const nextQuestion = () => {
  return {
    type: NEXT_QUESTION
  }
}
