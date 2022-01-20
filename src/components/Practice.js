import React from "react";
import { connect } from 'react-redux';
import anime from "animejs";
import Question from "./Question";
import Banner from './Banner';
import Modal from "./Modal";

import { clearPracticeSession } from "../actions";

class Practice extends React.Component {
  constructor(props){
    super(props);
    this.state = { open: false, value: null }
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

  

  render() {
    return (
      <div className='container'>
        <div className="row">
        <div className="d-flex justify-content-between">
          <div className='mt-5 ms-3 h3 pe-auto' onClick={() => this.setState({open: true})}>
            <i className="bi bi-x-lg x"></i>
          </div>
        </div>
      </div>
        <div className='row mt-3 question'>
            <Modal open={this.state.open} onClose={this.closeModal}/>
            <Question question={this.props.questions[this.props.currentQuestion]}/>
        </div>
        <div className='row mt-5'>
          <Banner reset={this.deSelectRadioButton} animate={this.animate} question={this.props.questions[this.props.currentQuestion]} selectedAnswer={this.props.selectedAnswer}/>
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

