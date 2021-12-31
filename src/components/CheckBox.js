import React from 'react';
import './CheckBox.css';

class CheckBox extends React.Component {
  constructor(props) {
    super(props);
      this.state = { value: false };
  }

  updateState = () => {
    const newState = !this.state.value;
    this.setState({ value: newState });
    this.props.handleClick(this.props.value, newState);
  }

  renderSymbol = () => {
    if(this.props.flat) {
      return '♭';
    }

    if(this.props.sharp) {
      return '♯';
    }

  }

  renderOctave = () => {
    return <span><sub>{this.props.octave}</sub></span>;
  }

  render(){
    return (
        <div className={`form-check mb-5 ${this.props.wide ? 'wide': ''}`}>
          <label className="form-check-label">
            <input className="form control form-check-input" type="checkbox" id={this.props.id} value={this.state.value} onChange={this.updateState}/>
            <span className={`checkmark ${this.props.color}`}>
              {this.props.text}
              {this.renderSymbol()}
              {this.renderOctave()}
            </span>
          </label>
        </div>
    );
  }
}

export default CheckBox;