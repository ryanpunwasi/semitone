import { CREATE_PRACTICE_SESSION } from "../actions/types";
import { createQuestions } from "../utils/createQuestions";
import randomString from 'random-string-simple';

//eslint-disable-next-line
export default (state = {}, action) => {
  switch(action.type) {
    case CREATE_PRACTICE_SESSION:
      return {
        ...state,
        id: randomString(16),
        currentQuestion: 0,
        mode: action.payload.mode,
        correct: 0,
        questions: createQuestions(action.payload.mode, action.payload.formValues)
    };
    default: 
      return state;
  }
}