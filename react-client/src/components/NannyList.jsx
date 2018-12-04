import React, { Component } from "react";
import NannyInfo from './NannyInfo.jsx';


class NannyList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
     
    }
    

  };

  render() {
    return(
        <div >
            <table id="ListTable"><thead><tr>
           
            <th>Name</th>
            <th>Last Name</th>
            <th>Email</th>
	          <th>Location</th>
	          <th>Rate</th>
	          <th>Type</th>
	   
            </tr></thead>
            <tbody>
	            {this.props.info.map(nanny =>
	              <NannyInfo key={nanny._id} details={nanny} nannyClick={this.props.handleClick}/>
	            )}
            </tbody>
          </table>
        </div>
   );
  }
}

export default NannyList;