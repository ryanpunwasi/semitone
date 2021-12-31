import React from 'react';
import './Dropdown.css';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: this.props.selected }
  }

  handleChange = (e) => {
    const newState = e.target.value;
    this.setState({ selected: newState });
    this.props.handleChange(newState);
  }

  render() {

    const options = this.props.options;
    let optionsList = options.map((option) => {
      return <option key={option} value={option}>{option}</option>;  
    });

    return (
      <div className='mb-5'>
        <div className="custom-select">
        <select className='fw-bold' value={this.state.selected}  onChange={this.handleChange}>
          {optionsList}
        </select>
      </div>
      </div>
      
    );
  }
}

export default Dropdown;