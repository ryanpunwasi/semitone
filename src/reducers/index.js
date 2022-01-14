import { combineReducers } from "redux";
import playInteractivePianoNote from "./playInteractivePianoReducer";
import practiceSession from "./practiceSessionReducer";

export default combineReducers({
    interactivepiano: playInteractivePianoNote,
    practice: practiceSession
});