import React from 'react';
import { createQuestions } from '../utils/createQuestions';
import './Button.css';

const Button = (props) => {

  //const [disabled, setDisabled] = useState(true);

  const renderGoogle = () => {
    if(props.google) {
      return <i className="bi bi-google me-2"></i>;
    }
  }

  const submitForm = () => {
    console.log(props.submit);
    createQuestions(props.mode, props.submit);
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

export default Button;