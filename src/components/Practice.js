import React from "react";
import Question from "./Question";
import Banner from './Banner';
import Modal from "./Modal";

class Practice extends React.Component {
  constructor(props){
    super(props);
    this.state = { open: false }
  }

  closeModal = () => {
    this.setState({ open: false });
  }

  render() {
    return (
      <div className='container'>
        <div className="row">
        <div className="d-flex justify-content-between">
          <div className='mt-3 ms-3 h3 pe-auto' onClick={() => this.setState({open: true})}>
            <i className="bi bi-x-lg x"></i>
          </div>
        </div>
        
      </div>
        <div className='row mt-3'>
            <Modal open={this.state.open} onClose={this.closeModal}/>
            <Question />
        </div>
        <div className='row mt-5'>
          <Banner />
        </div>
      </div>
    );
  }
}

export default Practice;

