import React from 'react';
import { connect } from 'react-redux';
import { changeSelected } from '../actions';
import InterfaceButton from './InterfaceButton';
import RadioButton from './RadioButton';
import './Question.css';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: false, value: null };
  }

  handleClick = (val) => {  
    this.props.changeSelected(val);
    this.setState({ selected: true, value: val });
    
  }

  componentDidUpdate() {
    
    
  }
  
  renderText(rawLabel){
    if(rawLabel.includes('sharp') || rawLabel.includes('flat')) {
      return rawLabel.substring(0, 1);
    }
    return rawLabel;
  }

  renderSharp(label){
    if(label.includes('sharp')) {
      return true
    }
    return false;
  }

  renderFlat(label){
    if(label.includes('flat')) {
      return true;
    }
    return false
  }

  render(){
    return (
      <>
        <div className="col-6 mt-5">
          <div className='d-flex justify-content-end justify-content-md-center justify-content-sm-center align-items-center sound-button'>
            <InterfaceButton text={this.renderText(this.props.question.sound.label)} color="blue" sharp={this.renderSharp(this.props.question.sound.label)} flat={this.renderFlat(this.props.question.sound.label)} note={new Audio(this.props.question.sound.soundFile)}/>
          </div>
        </div>
        <div id="buttonGroup" className="col-6 mt-3">
            <form className='d-flex flex-row justify-content-center flex-wrap'>
            
              <RadioButton handleClick={this.handleClick} value="1" color="transparent" note={new Audio(this.props.question.options['1'].soundFile)}/>
              <RadioButton handleClick={this.handleClick} value="2" color="transparent" note={new Audio(this.props.question.options['2'].soundFile)}/>
              <RadioButton handleClick={this.handleClick} value="3" color="transparent" note={new Audio(this.props.question.options['3'].soundFile)}/>
              <RadioButton handleClick={this.handleClick} value="4" color="transparent" note={new Audio(this.props.question.options['4'].soundFile)}/>
          
            </form>
        </div>
      </>
    );
  }
}

export default connect(null, { changeSelected })(Question);