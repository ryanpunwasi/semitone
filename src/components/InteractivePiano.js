import React from 'react';
import anime from 'animejs';
import { connect } from 'react-redux';

import { playInteractivePianoNote } from '../actions'
import './InteractivePiano.css';
import Image from '../assets/img/keyboard-cropped.svg';
import LTheme from '../scales/ltheme';
import FurElise from '../scales/furelise';
import AngelBeats from '../scales/angelbeats';
import Mario from '../scales/mario';
 

class HomeAnimation extends React.Component {

  pianoAnimate = () => {
    if(this.props.scale === "L's Theme") {
      let audio = new Audio(LTheme[this.props.currentNote]);
      audio.load();
      audio.play();
    } else if(this.props.scale === 'Fur Elise') {
      let audio = new Audio(FurElise[this.props.currentNote]);
      audio.load();
      audio.play();
    } else if(this.props.scale === 'Angel Beats') {
      let audio = new Audio(AngelBeats[this.props.currentNote]);
      audio.load();
      audio.play();
    } else if(this.props.scale === 'Mario') {
      let audio = new Audio(Mario[this.props.currentNote]);
      audio.load();
      audio.play();
    }
    
    
    //let audio = document.getElementById(this.props.currentNote);
    
    this.props.playInteractivePianoNote(); 
    anime({
      targets: '#interactivePiano',
      keyframes: [
        {translateX: 5},
        {translateX: -5},
        {translateX: 5},
        {translateX: 0}
      ],
      duration: 400,
      easing: 'linear',
      delay: 0
    });
};

  render() {
    return (
      <section id='animation'>
        <div className='container'>
          <div className='row'>
            <div className='col-6 offset-md-3 mx-auto'>
              <div id='piano' onClick={this.pianoAnimate}>
                <img id='interactivePiano' className='d-inline-block mx-auto' src={Image} alt='' title={this.props.scale}/>
                <audio id='audio' src=''></audio>
              </div>
            </div> 
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    currentNote: state.interactivepiano.currentNote,
    scale: state.interactivepiano.scale
  };
}

export default connect(mapStateToProps, { playInteractivePianoNote })(HomeAnimation);