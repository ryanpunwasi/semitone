import React from 'react';
import Caption from './Caption';
import Button from './Button';
import { Link } from 'react-router-dom';

class Score extends React.Component {
  state = { answered_correct: 10 };
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col mt-4">
            <Caption size='9rem' text={`${Math.round((this.state.answered_correct/14)*100)}%`} animated></Caption>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Caption size='2.5rem' text={`You answered ${this.state.answered_correct} out of 12 questions correctly. Keep it going!`}></Caption>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-3">
            <Link to='/octaves'>
              <Button text="Octaves" color="pink" wide/>
            </Link>
          </div>
          <div className="col-3">

            <Button text="Notes" color="blue" wide></Button>
          </div>
          <div className="col-3">
            <Button text="Chords" color="red" wide></Button>
          </div>
          <div className="col-3">
            <Button text="Scales" color="green" wide></Button>
          </div>
        </div>
      </div>
    );
  }
}
export default Score;