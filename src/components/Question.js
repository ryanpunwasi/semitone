import React from 'react';
import anime from 'animejs';
import InterfaceButton from './InterfaceButton';
import RadioButton from './RadioButton';
import './Question.css';
import DSharp from '../assets/octave-4/Dsharp.mp3';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: false, value: null };
  }

  handleClick = (val) => {
    this.setState({ selected: true, value: val });
  }

  componentDidMount() {
    // anime({
    //   targets: '.question',
    //   translateX: '-40px',
    //   opacity: '0',
    //   duration: 150,
    //   easing: 'easeOutQuad',
    //   delay: 500
    // });
  }

  fadeOut = () => {
    anime({
      targets: '.question',
      translateX: '20px',
      opacity: '0',
      duration: 150,
      easing: 'easeOutQuad',
      delay: 500
    });
  }

  render(){
    return (
      <React.Fragment>
        <div className="col-6 mt-5">
          <div className='d-flex justify-content-end justify-content-md-center justify-content-sm-center  align-items-center'>
            <InterfaceButton text="" color="blue" note={new Audio(DSharp)} play/>
          </div>
        </div>
        <div id="buttonGroup" className="col-6 mt-3">
            <form className='d-flex flex-row justify-content-center flex-wrap'>
            
              <RadioButton handleClick={this.handleClick} value="1" color="transparent" note={new Audio(DSharp)}/>
              <RadioButton handleClick={this.handleClick} value="2" color="transparent" note={new Audio(DSharp)}/>
              <RadioButton handleClick={this.handleClick} value="3" color="transparent" note={new Audio(DSharp)}/>
              <RadioButton handleClick={this.handleClick} value="4" color="transparent" note={new Audio(DSharp)}/>
          
            </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Question;