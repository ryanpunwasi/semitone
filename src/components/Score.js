import React from 'react';
import Caption from './Caption';
import Button from './Button';
import '../config/dev';
import '../config/prod';




class Score extends React.Component {
  renderRoot = () => {
    let root;
    if(window.location.hostname === 'semitone.io') {
      root = 'http://semitone.io';
    } else {
      root = 'http://localhost:3000';
    }

    return root;
  }
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col mt-5">
            <Caption size='9rem' text={`${Math.round((this.props.answered_correct/12)*100)}%`} animated></Caption>
          </div>
        </div>
        <div className="row">
          <div className="col mt-3">
            <Caption size='2.5rem' text={`You answered ${this.props.answered_correct} out of 12 questions correctly. Keep it going!`}></Caption>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-3">
            <a href={`${this.renderRoot()}/octaves`}>
              <Button text="Octaves" color="pink" wide/>
            </a>
          </div>
          <div className="col-3">
            <a href={`${this.renderRoot()}/notes`}>
              <Button text="Notes" color="blue" wide></Button>
            </a>
          </div>
          <div className="col-3">
            <a href={`${this.renderRoot()}/chords`}>
              <Button text="Chords" color="red" wide></Button>
            </a>
          </div>
          <div className="col-3">
            <a href={`${this.renderRoot()}/scales`}>
              <Button text="Scales" color="green" wide></Button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Score;