import React from 'react';
import './RadioButton.css';

class RadioButton extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { isPlaying: false }
  }

  componentDidMount() {
    if(this.props.note) {
      this.props.note.preload = 'auto';
    }
  }

  componentWillUnmount() {
    if(this.state.isPlaying) {
      if(this.props.note) {
        this.props.note.pause();
      } else {
        this.props.chord.root.pause()
        this.props.chord.third.pause()
        this.props.chord.fifth.pause()
      }
    }
  }

  updateState = () => {
    this.props.handleClick(this.props.value);
    this.playNote(this.props.note)
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

  playNote = () => {
    let playPromise = this.props.note.play();
    if(this.state.isPlaying) {
      playPromise.then(_ => {
          this.props.note.pause();
      });
    }
      
    this.props.note.onended = () => {
      this.setState({ isPlaying: false});
    }

    this.setState({ isPlaying: true });
    // this.props.note.load()

    // this.props.note.play();  
    

     
  }

  render(){
    return ( 
        <div className={`form-radio`}>
          <label className="form-radio-label">
            <input className="form control form-radio-input" name="answer" type="radio" value={this.props.value} onChange={this.updateState} onClick={this.updateState}/>
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