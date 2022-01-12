import React from 'react';
import { createQuestions } from '../utils/createQuestions';
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

  const renderIcon = () => {
    if(props.icon) {
      return (
        <>
          <i className="bi bi-music-note"></i>
          <i className="bi bi-music-note-beamed"></i>
        </>
      );
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
          {renderIcon()}
        </button>
      </div>
    );
  }
  
}

export default Button;