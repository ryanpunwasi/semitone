import React from 'react';
import { connect } from 'react-redux';
import { nextQuestion, incrementCorrectAnswer } from '../actions';
import Button from './Button';

import './Banner.css';

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { style: 'none', hasAnswered: false};
  }

  renderStyle = () => {
    if(this.state.style === 'correct') {
      return {color: 'green', text: "That's correct!", buttonText: 'Continue'};
    } else if(this.state.style === 'incorrect') {
      return {color: 'red', text: `The correct answer is ${this.props.question.answer}.`, buttonText: 'Continue'}
    } else {
      return {color: 'transparent', text: '', buttonText: 'Check'}
    }
  }

  handleClick = () => {
    if(!this.props.selectedAnswer) {
      return;
    }
    if(this.state.hasAnswered) {
      this.props.reset();
      this.props.nextQuestion();
      this.props.animate();
      this.setState({ style: 'none', hasAnswered: false });
    } else {
      // eslint-disable-next-line eqeqeq
      if(this.props.question.answer == this.props.selectedAnswer) {
        this.props.incrementCorrectAnswer();
        this.setState({ style: 'correct', hasAnswered: true});
      } else if(this.props.question.answer !== this.props.selectedAnswer){
        this.setState({ style: 'incorrect', hasAnswered: true });
      }
    }  
  }

  render(){
    return (
      <>
        <div id="banner" className={`banner-${this.renderStyle().color} navbar fixed-bottom`}>
          <span className={`banner-text-${this.renderStyle().color} ms-5 fw-bolder`}>
          {this.renderStyle().text}
          </span>
          <div className='me-5 banner-button mt-1' onClick={this.handleClick}>
            <Button color={this.renderStyle().color} text={this.renderStyle().buttonText} wide></Button>
          </div>
          
        </div>
      </>
    );
  }
}

export default connect(null, { nextQuestion, incrementCorrectAnswer })(Banner);