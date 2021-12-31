import React from 'react';
import './RadioButton.css';

class RadioButton extends React.Component {
  
  updateState = () => {
    this.props.handleClick(this.props.value);
  }

  renderSymbol = () => { 
    if(this.props.flat) {
      return '♭';
    } else if(this.props.sharp) {
        return '♯';
      }
  }

  renderOctave = () => {
    return <span><sub>{this.props.octave}</sub></span>;
  } 

  handleClick = () => {
    this.setState({ value: !this.state.value });
  }

  render(){
    return (
        <div className={`form-radio`}>
          <label className="form-radio-label">
            <input className="form control form-radio-input" name="answer" type="radio" value={this.props.value} onClick={this.updateState}/>
            <span className={`radio ${this.props.color}`}>
              {this.props.value}
              {this.renderSymbol()}
              {this.renderOctave()}
            </span>
          </label>
        </div>
    );
  }
}

export default RadioButton;