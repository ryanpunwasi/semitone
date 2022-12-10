import { connect } from "react-redux";
import { createPracticeSession } from "../actions";
import "./Button.css";

const Button = props => {
  const submitForm = () => {
    props.createPracticeSession(props.modality, props.submit);
  };

  if (props.submit) {
    if (props.disabled) {
      return (
        <div>
          <button
            onClick={submitForm}
            className={`disabled mb-3 button ${props.wide ? "wide" : ""} ${
              props.color
            }`}
            disabled
          >
            {props.text}
          </button>
        </div>
      );
    }
    return (
      <div>
        <button
          onClick={submitForm}
          className={`mb-3 button ${props.wide ? "wide" : ""} ${props.color}`}
        >
          {props.text}
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <button
          className={`mb-3 button ${props.wide ? "wide" : ""} ${props.color}`}
          onClick={props.onClick}
        >
          {props.text}
        </button>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    id: state.practice.id,
    currentQuestion: state.practice.currentQuestion,
    mode: state.practice.mode,
    correct: state.practice.correct,
    questions: state.practice.questions,
  };
};

export default connect(mapStateToProps, { createPracticeSession })(Button);
