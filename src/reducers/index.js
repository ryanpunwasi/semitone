import { combineReducers } from "redux";
import playInteractivePianoNote from "./playInteractivePianoReducer";

export default combineReducers({
    interactivepiano: playInteractivePianoNote
});