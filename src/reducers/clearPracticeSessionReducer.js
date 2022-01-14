import { CLEAR_PRACTICE_SESSION } from "../actions/types";
import _ from 'lodash';

//eslint-disable-next-line
export default (state, action) => {
  switch(action.type) {
    case CLEAR_PRACTICE_SESSION:
      return {...state, id:'changed'};
    default:
      return state;
  }
}