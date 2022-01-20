import _ from 'lodash';
import { CREATE_PRACTICE_SESSION, CLEAR_PRACTICE_SESSION, CHANGE_SELECTED, NEXT_QUESTION, INCREMENT_CORRECT_ANSWER } from "../actions/types";
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
        questions: createQuestions(action.payload.mode, action.payload.formValues),
        selectedAnswer: null
      };
    case CLEAR_PRACTICE_SESSION:
      return _.omit(state, ['id', 'currentQuestion', 'mode', 'correct', 'questions', 'selectedAnswer']);
    case CHANGE_SELECTED:
      return {
        ...state,
        selectedAnswer: action.payload
      };
    case INCREMENT_CORRECT_ANSWER:
      return {
        ...state,
        correct: state.correct + 1
      };
    case NEXT_QUESTION:
        return {
          ...state,
          currentQuestion: state.currentQuestion + 1,
          correct: state.correct,
          selectedAnswer: null, 
        }
    default: 
      return state;
  }
}