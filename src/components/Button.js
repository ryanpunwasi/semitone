import React from 'react';
import { connect } from 'react-redux';
import { createPracticeSession } from '../actions';
//import { createQuestions } from '../utils/createQuestions';
import './Button.css';

const Button = (props) => {

  const renderGoogle = () => {
    if(props.google) {
      return <i className="bi bi-google me-2"></i>;
    }
  }

  const submitForm = () => {
    //console.log(props.submit, props.modality);
    props.createPracticeSession(props.modality, props.submit);
  }

  if(props.submit) {
    if(props.disabled) {
      return (
        <div>
        <button onClick={submitForm} className={`disabled mb-3 button ${props.wide ? 'wide': ''} ${props.color}`} disabled>
          {props.text}
        </button>
      </div>
      );
    }
    return (
      <div>
        <button onClick={submitForm} className={`mb-3 button ${props.wide ? 'wide': ''} ${props.color}`}>
          {props.text}
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <button className={`mb-3 button ${props.wide ? 'wide': ''} ${props.color}`} onClick={props.onClick}>
          {renderGoogle()}
          {props.text}
        </button>
      </div>
    );
  }
  
}

const mapStateToProps = (state) => {
  return { 
    id: state.practice.id,
    currentQuestion: state.practice.currentQuestion,
    mode: state.practice.mode,
    correct: state.practice.correct,
    questions: state.practice.questions
  };
}

export default connect(mapStateToProps, { createPracticeSession })(Button);