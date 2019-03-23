import React, { Component } from "react";
import $ from 'jquery';
import CustomerDetails from "./CustomerDetails.jsx";

class AdminView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customerList: []
    };
  }
  
  componentDidMount(){
    $.ajax({
    	method: 'GET',
    	url: 'https://nanny-demo.herokuapp.com/customers',
    	success: (data) => {
    	  this.setState({
    	  	customerList: data
    	  })
    	}
    })
  }
  render() {
    return (
      <article id="article2">
        
        <div className="line" />
        <div>
          <table id="ListTable">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Message</th>
                
                
              </tr>
            </thead>
            <tbody>
              {this.state.customerList.map(customer => (
                <CustomerDetails
                  key={customer._id}
                  details={customer}
                  view={this.props.view}
                  nannyClick={this.props.nannyClick}
                />
              ))}
            </tbody>
          </table>
        </div>
      </article>
    );
  }
}

export default AdminView;

