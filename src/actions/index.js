import { 
  PLAY_INTERACTIVE_PIANO_NOTE,
  CREATE_PRACTICE_SESSION,
  CLEAR_PRACTICE_SESSION,
  CHANGE_SELECTED,
  NEXT_QUESTION,
  INCREMENT_CORRECT_ANSWER
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

export const changeSelected = val => {
  return {
    type: CHANGE_SELECTED,
    payload: val
  }
}

export const incrementCorrectAnswer = () => {
  return {
    type: INCREMENT_CORRECT_ANSWER
  }
}
