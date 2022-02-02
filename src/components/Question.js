import React from 'react';
import { connect } from 'react-redux';
import { changeSelected } from '../actions';
import InterfaceButton from './InterfaceButton';
import RadioButton from './RadioButton';
import './Question.css';
import { toNoteNotation } from '../utils/toNoteNotation';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: false, value: null };
  }

  componentDidMount() {
    document.getElementById('interfaceButton').focus();
  }

  handleClick = (val) => {  
    this.props.changeSelected(val);
    this.setState({ selected: true, value: val });
    
  }
  
  renderText(rawLabel){
    if(rawLabel.includes('sharp') || rawLabel.includes('flat')) {
      return rawLabel.substring(0, 1);
    }
    return rawLabel;
  }

  renderSharp(label){
    if(this.props.mode === 'octaves') {
      if(label.includes('sharp')) {
        return true
      }
      return false;
    }
  }

  renderFlat(label){
    if(this.props.mode === 'octaves') {
      if(label.includes('flat')) {
        return true;
      }
      return false
    }
  }

  renderRadioButtonValue = () => {
    let values = []
    switch(this.props.mode){
      case 'octaves':
        values = ["1", "2", "3", "4"]
        break;
      case 'notes':
        values = [
          this.props.question.options[1].label,
          this.props.question.options[2].label,
          this.props.question.options[3].label,
          this.props.question.options[4].label,
        ]
        break;
      case 'chords':
        values = [
          this.props.question.options[1].label,
          this.props.question.options[2].label,
          this.props.question.options[3].label,
          this.props.question.options[4].label,
        ]
        break;
      case 'scales':
        values = [
          this.props.question.options[1].label,
          this.props.question.options[2].label,
          this.props.question.options[3].label,
          this.props.question.options[4].label,
        ];
        break;
      default:
        break;
    };
    return values;
  }

  renderInterFaceButtonText = () => {
    let text = '';
    switch(this.props.mode) {
      case 'octaves':
        text = this.renderText(this.props.question.sound.label);
        break;
      case 'notes':
        text = <i className="bi bi-question-lg"></i>
        break;
      case 'chords':
        text = <i className="bi bi-question-lg"></i>
        break;
      case 'scales':
        text = <i className="bi bi-question-lg"></i>
        break;
      default:
        break;
    }
    return text;
  }

  renderChord = () => {
    if(this.props.mode === 'chords') {
      return {
        root: new Audio(this.props.question.sound.soundFile.root),
        third: new Audio(this.props.question.sound.soundFile.third),
        fifth: new Audio(this.props.question.sound.soundFile.fifth)
      };
    }
    return false;
  }

  renderChordNotation = () => {
    let values = [];
    if(this.props.mode === 'chords' || this.props.mode === 'scales') {
      for(let i = 1; i < 5; i++) {
        values.push(this.props.question.options[i].major_or_minor);
      }
    }
    return values;
  }

  renderNote = () => {
    if(this.props.mode === 'scales') {
      return this.props.question.sound.soundFile;
    } else {
      return new Audio(this.props.question.sound.soundFile)
    }
  }

  render(){
    const values = this.renderRadioButtonValue();
    const chord_notations = this.renderChordNotation();
    return (
      <>
        <div className="col-4 col-sm-6 mt-5">
          <div className='d-flex justify-content-center justify-content-md-center justify-content-sm-center align-items-center sound-button'>
            <InterfaceButton soundFile={this.props.question.sound.soundFile} text={this.renderInterFaceButtonText()} color="blue" sharp={this.renderSharp(this.props.question.sound.label)} flat={this.renderFlat(this.props.question.sound.label)} note={this.renderNote()} chord={this.renderChord()} mode={this.props.mode}/>
          </div>
        </div>
        <div id="buttonGroup" className="col-8 col-sm-6 mt-3">
            <form className='d-flex flex-row justify-content-center flex-wrap'>
              <RadioButton handleClick={this.handleClick} value="1" text={toNoteNotation(values[0])} color="transparent" note={new Audio(this.props.question.options['1'].soundFile)} chordtype={chord_notations[0]}/>
              <RadioButton handleClick={this.handleClick} value="2" text={toNoteNotation(values[1])} color="transparent" note={new Audio(this.props.question.options['2'].soundFile)} chordtype={chord_notations[1]}/>
              <RadioButton handleClick={this.handleClick} value="3" text={toNoteNotation(values[2])} color="transparent" note={new Audio(this.props.question.options['3'].soundFile)} chordtype={chord_notations[2]}/>
              <RadioButton handleClick={this.handleClick} value="4" text={toNoteNotation(values[3])} color="transparent" note={new Audio(this.props.question.options['4'].soundFile)} chordtype={chord_notations[3]}/>
            </form>
        </div>
      </>
    );
  }
}

export default connect(null, { changeSelected })(Question);