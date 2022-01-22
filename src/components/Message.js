import React from 'react';
class Message extends React.Component {
  constructor(props){
    super(props);
    this.state = { open: true }
  }

  render(){
    return(
      <div>
        <div className="alert alert-info fade show text-center" role="alert" style={{ border: '3px solid #00849f', borderRadius: '8px'}}>
          <strong>{this.props.text}</strong>
        </div>  
      </div>
    );
  }
}
export default Message;