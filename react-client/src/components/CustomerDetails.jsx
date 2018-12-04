import React, { Component } from "react";


class CustomerDetails extends React.Component {
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

