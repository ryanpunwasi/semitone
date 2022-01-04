import React from 'react';
import { createQuestions } from '../createQuestions';
import './Button.css';

const Button = (props) => {

  const renderGoogle = () => {
    if(props.google) {
      return <i className="bi bi-google me-2"></i>;
    }
  }

  const renderFacebook = () => {
    if(props.facebook) {
      return <i className="bi bi-facebook me-2"></i>;
    }
  }

  const submitForm = () => {
    console.log(props.submit);
    createQuestions(props.mode, props.submit);
  }

  if(props.submit) {
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
          {renderFacebook()}
          {props.text}
        </button>
      </div>
    );
  }
  
}

export default Button;