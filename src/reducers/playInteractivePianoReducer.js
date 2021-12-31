import { PLAY_INTERACTIVE_PIANO_NOTE } from "../actions/types";
import _ from 'lodash';

const INITIAL_STATE = {
  scale: _.sample(['Fur Elise', 'Angel Beats', "L's Theme", "Mario"], 1),
  currentNote: 0
};

// eslint-disable-next-line
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PLAY_INTERACTIVE_PIANO_NOTE:
      if(state.scale === 'Fur Elise') {
        if(state.currentNote === 16) {
          return { ...state, currentNote: 0  };
        } else {
            return { ...state, currentNote: state.currentNote + 1  };
          }
      } else if(state.scale === 'Angel Beats') {
          if(state.currentNote === 20) {
            return { ...state, currentNote: 0  };
          } else {
            return { ...state, currentNote: state.currentNote + 1  };
            }
      } else if(state.scale === "L's Theme") {
          if(state.currentNote === 12) {
            return { ...state, currentNote: 0  };
          } else {
            return { ...state, currentNote: state.currentNote + 1  };
            }
      } else if(state.scale === "Mario") {
          if(state.currentNote === 16) {
            return { ...state, currentNote: 0  };
          } else {
            return { ...state, currentNote: state.currentNote + 1  };
            }
      }
    //eslint-disable-next-line
    default:
      return state;
  }
};