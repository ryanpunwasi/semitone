import React from 'react';
import { connect } from 'react-redux';
import { nextQuestion, incrementCorrectAnswer } from '../actions';
import Button from './Button';
import { toNoteNotation } from '../utils/toNoteNotation';
import './Banner.css';

import correct from '../assets/sounds/correct.mp3';
import incorrect from '../assets/sounds/incorrect.mp3';

let correct_audio = new Audio(correct);
let incorrect_audio = new Audio(incorrect);
correct_audio.preload = 'auto';
incorrect_audio.preload = 'auto';
correct_audio.volume = 0.3;
incorrect_audio.volume = 0.3;

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { style: 'none', hasAnswered: false, hasPlayed: false};
  }

  componentDidMount(){
    // During practice sessions, submit answer when Enter is pressed.
    // if(this.props.mode) {
    //   document.addEventListener('keydown', (event) => {
    //     if(event.key === "Enter") {
    //         document.getElementById('checkButton').focus();
    //         this.handleClick();
    //     }
    //   });
    // }
  }

  renderStyle = () => {
    if(this.state.style === 'correct') {
      
      return {color: 'green', text: "That's correct!", buttonText: 'Continue'};
    } else if(this.state.style === 'incorrect') {
      
      if(this.props.mode === 'octaves') {
        return {color: 'red', text: `The correct answer is ${this.props.question.answer}.`, buttonText: 'Continue'}
      } else if(this.props.mode === 'notes') {
        return {color: 'red', text: `The correct answer is ${toNoteNotation(this.props.question.options[this.props.question.answer].label)}.`, buttonText: 'Continue'}
      } else if(this.props.mode === 'chords') {
        return {color: 'red', text: `The correct answer is ${toNoteNotation(this.props.question.options[this.props.question.answer].label)} ${this.props.question.options[this.props.question.answer].major_or_minor}.`, buttonText: 'Continue'}
      } else if(this.props.mode === 'scales') {
        return {color: 'red', text: `The correct answer is ${toNoteNotation(this.props.question.options[this.props.question.answer].label)} ${this.props.question.options[this.props.question.answer].major_or_minor}.`, buttonText: 'Continue'}
      }
      
    } else {
      
      return {color: 'transparent', text: '', buttonText: 'Check'}
      
    }
  }

  handleClick = () => {
    if(!this.props.selectedAnswer) {
      return;
    }
    if(this.state.hasAnswered) {
      if(this.props.mode === 'scales') {
        document.getElementById('audio').load()
      }
      if(this.props.currentQuestion !== '12') {
        this.props.reset();
        this.props.nextQuestion();
        this.props.animate();
        this.setState({ style: 'none', hasAnswered: false });
      }
    } else {
      if(this.props.mode === 'scales') {
        document.getElementById('audio').load()
      }
      // eslint-disable-next-line eqeqeq
      if(this.props.question.answer == this.props.selectedAnswer) {
        correct_audio.play();
        this.props.incrementCorrectAnswer();
        this.setState({ style: 'correct', hasAnswered: true });
      } else if(this.props.question.answer !== this.props.selectedAnswer){
        incorrect_audio.play();
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
          <div id='checkButton' className='me-5 banner-button mt-1' onClick={this.handleClick}>
            <Button color={this.renderStyle().color} text={this.renderStyle().buttonText} wide></Button>
          </div>
          
        </div>
      </>
    );
  }
}

export default connect(null, { nextQuestion, incrementCorrectAnswer })(Banner);