import React from 'react';
import './HorizontalRule.css';

const HorizontalRule = (props) => {
  return (
    <h2 className='hr-text fw-bold text-muted'><span>{props.text}</span></h2>
  );
}

export default HorizontalRule;