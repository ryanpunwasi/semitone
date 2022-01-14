import { combineReducers } from "redux";
import playInteractivePianoNote from "./playInteractivePianoReducer";
import createPracticeSession from "./createPracticeSessionReducer";

export default combineReducers({
    interactivepiano: playInteractivePianoNote,
    practice: createPracticeSession
});