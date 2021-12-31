import React from 'react';
import Button from './Button';

import './Banner.css';

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { style: 'none'};
  }

  renderStyle = () => {
    if(this.state.style === 'correct') {
      return {color: 'green', text: "That's correct!", buttonText: 'Continue'};
    } else if(this.state.style === 'incorrect') {
      return {color: 'red', text: "That's incorrect.", buttonText: 'Continue'}
    } else {
      return {color: 'transparent', text: '', buttonText: 'Check'}
    }
  }

  handleClick = () => {
    this.setState({ style: 'correct'});
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
export default Banner;