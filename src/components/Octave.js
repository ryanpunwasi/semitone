import React from 'react';
import { Link } from 'react-router-dom';
import CheckBox from './CheckBox';
import Button from './Button';
import Trombone from '../assets/img/trombone.svg';
import HorizontalRule from './HorizontalRule';
import './VerticalRule.css';

class Octave extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 1: false, 2: false, 3: false, 4: false, 5: false };
  }

  handleClick = (key, value) => {
    switch(key) {
      case '1':
        this.setState({ 1: value});
        break;
      case '2':
        this.setState({ 2: value});
        break;
      case '3':
        this.setState({ 3: value});
        break;
        case '4':
      this.setState({ 4: value});
      break;
      case '5':
        this.setState({ 5: value});
        break;
      default:
        break;
    }
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-start">
            <Link to='/onboarding'>
              <Button text="← Onboarding" color='outline'/>
            </Link>
          </div>
        </div>
        <div className='row mb-5' id='settings'>
          <div className="col-md-4 col-sm-12 mt-5 border-end border-3" id='vertical-rule'>
            <div className="col-md-6 col-sm-12 mx-auto my-auto align-middle">
              <div className="mx-auto">
                <div className='col-md-12 col-sm-4 col-6 mt-4 mb-4 mx-auto'>
                  <img src={Trombone} alt="Trombone" className="d-block mx-auto"/>
                </div>
                <h4 className="mb-5 text-center text-muted fw-bolder">Select the octaves you'd like to practice!</h4>
              </div>
            </div>
            <div className='d-sm-block d-block d-md-none d-lg-none'>
              <HorizontalRule text=""/>
            </div>
          </div>
          <div className="me-auto col-md-8 col-sm-12 mt-5">
            <div className="d-flex justify-content-evenly flex-wrap"> 
              <CheckBox handleClick={this.handleClick} text="1" value='1' color="transparent"/>
              <CheckBox handleClick={this.handleClick} text="2" value='2' color="transparent"/>
              <CheckBox handleClick={this.handleClick} text="3" value='3' color="transparent"/>
              <CheckBox handleClick={this.handleClick} text="4" value='4' color="transparent"/>
              <CheckBox handleClick={this.handleClick} text="5"  value='5'color="transparent"/>
              
            </div>
            <div className="d-flex justify-content-center ms-4 mt-3 mb-5">  
                <Button color="purple" text="Start" wide submit={this.state}></Button>
            </div>
          </div>
        </div>
      </div>
    )
  }  
}

export default Octave;