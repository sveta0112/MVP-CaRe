import React, { Component } from "react";


class NannyInfo extends React.Component {
  render() {
    return(
        <tr> 
          
          <td>{this.props.details.firstName}</td>
	        <td>{this.props.details.lastName}</td>
	        <td>{this.props.details.email}</td>
	        <td>{this.props.details.location}</td>
	        <td>{this.props.details.hourlyRate}</td>
	        <td>{this.props.details.sitterType}</td>
          <td><a onClick={() => this.props.nannyClick(this.props.details, 'nannyInfo')}>View applicant</a></td>
           
        </tr>
    )
  }
}

export default NannyInfo;