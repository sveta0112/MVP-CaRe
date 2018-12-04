import React, { Component } from "react";


class CustomerDetails extends React.Component {
  constructor(props){
    super(props);
    this.submitReply = this.submitReply.bind(this);
  }
  submitReply(){
    this.props.nannyClick(this.props.details, "reply")
  }
  render() {
    return(
        <tr> 
          
          <td>{this.props.details.firstName}</td>
          <td>{this.props.details.lastName}</td>
          <td>{this.props.details.email}</td>
          <td>{this.props.details.message}</td>
         
           
         
           
        </tr>
    )
  }
}

export default CustomerDetails;

