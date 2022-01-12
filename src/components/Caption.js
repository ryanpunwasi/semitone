import React from 'react';
import anime from 'animejs';
import './Caption.css';

class Caption extends React.Component {

  renderID = () => {
    if(this.props.animated) {
      return 'score';
    }
  }
  componentDidMount() {
    if(this.props.animated) {
      anime({
        targets: '#score',
        keyframes: [
          {value: 100, scale: 1.3},
          {value: 105, translateX: -5},
          {value: 110, translateX: 5},
          {value: 115, translateX: 0},
          {value: 120, translateX: -5},
          {value: 125, translateX: 5},
          {value: 130, translateX: 0},
          {value: 135, translateX: 0},
          {value: 235, scale: 1}
        ],
        duration: 1000,
        easing: 'linear',
        delay: 2000, 
        loop: true
      });
    }
  }

  render() {
    return(
      <div>
        <p id={`${this.renderID()}`} className={`mallanna text-center h4 mb-4`} style={{fontSize: this.props.size}}>{this.props.text}</p>
      </div>
    );
  }
}

export default Caption;