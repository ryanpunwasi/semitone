import React from "react";
import { connect } from 'react-redux';
import anime from "animejs";
import Question from "./Question";
import Score from './Score';
import Banner from './Banner';
import Modal from "./Modal";

import { clearPracticeSession } from "../actions";
import Message from "./Message";

class Practice extends React.Component {
  constructor(props){
    super(props);
    this.state = { open: false, value: null, scorePage: false }
  }

  componentDidUpdate(){
    document.activeElement.blur();
  }

  componentDidMount() {
    anime({
      targets: '.sound-button',
      keyframes: [
        {translateX: -5},
        {translateX: 5},
        {translateX: -5},
        {translateX: 5},
        {translateX: 0}
      ],
      duration: 900,
      delay: 100,
      easing: 'easeInOutQuad'
    });
    
  }

  deSelectRadioButton = () => {
    const radios = document.getElementsByTagName('input');
    for(let i = 0; i < radios.length; i++ ) {
      radios[i].checked = false;
    }
  }

  animate = () => {
    anime({
      targets: '.sound-button',
      keyframes: [
        {scale: 0.9},
        {scale: 1.2},
        {scale: 0.9},
        {scale: 1},
      ],
      duration: 600,
      easing: 'easeInOutQuad'
    });
  }
  
  componentWillUnmount(){
    this.props.clearPracticeSession();
  }

  closeModal = () => {
    this.setState({ open: false });
  }

  renderCaption = () => {
    let caption = '';
    switch(this.props.mode){
      case 'octaves':
        caption = 'Select the number that is the same note, but in a different octave.';
        break;
      case 'notes':
        caption = 'Select the note that matches the audio.'
        break;
      case 'chords':
        caption = 'Select the chord that matches the audio.'
        break;
      case 'scales':
        caption = 'Select the scale that matches the audio.'
        break;
      default:
        return caption
    }

    return caption;
  }

  render() {
    // eslint-disable-next-line eqeqeq
    if(this.props.currentQuestion == '12') {
      return (
        <Score answered_correct={this.props.correct}></Score>
      );
    }
    return (
      <div className='container'>
        <div className="row">
        <div className="d-flex justify-content-between">
          <div className='mt-4 ms-3 h3 pe-auto' onClick={() => this.setState({open: true})}>
            <i className="bi bi-x-lg x"></i>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6 mx-auto">
        <Message text={this.renderCaption()}/>
        </div>
      </div>
        <div className='row mt-3 question'>
            <Modal open={this.state.open} onClose={this.closeModal}/>
            <Question question={this.props.questions[this.props.currentQuestion]} mode={this.props.mode}/>
        </div>
        <div className='row mt-5'>
          <Banner reset={this.deSelectRadioButton} animate={this.animate} question={this.props.questions[this.props.currentQuestion]} selectedAnswer={this.props.selectedAnswer} mode={this.props.mode} currentQuestion={this.props.currentQuestion}/>
        </div>
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
    questions: state.practice.questions,
    selectedAnswer: state.practice.selectedAnswer
  };
}

export default connect(mapStateToProps, { clearPracticeSession })(Practice);

