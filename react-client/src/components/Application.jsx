import React from 'react';
import $ from 'jquery';
import axios from 'axios';

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      location:"",
      hourlyRate:"$12.50",
      sitterType:"All sitters and nannies",
      details: "",
      createdAt: ""

    };
    this.handleChange = this.handleChange.bind(this);
    this.submitAttendee = this.submitAttendee.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  submitAttendee(e) {
    e.preventDefault();
    axios.post("/nannies", this.state);
    this.props.nannyClick(this.props.desc, 'applyConfirmation')
    
  }

  render() {
    return (
      <div>
        <form>
          First Name:
          <input type="text" id="firstName" onChange={this.handleChange} />
          Last Name:
          <input type="text" id="lastName" onChange={this.handleChange} />
          Email:
          <input type="text" id="email" onChange={this.handleChange} />
          Location:
          <input type="text" id="location" onChange={this.handleChange} />
          Rate:
          <select id="hourlyRate" onChange={this.handleChange}>
            <option value="$12.50">$12.50</option>
            <option value="$15.00">$15.00</option>
            <option value="$20.00">$20.00</option>
            <option value="$25.00">$25.00</option>
            <option value="$32.50">$32.50</option>
          </select><br/><br/><br/>

          Type:
          <select id="sitterType" onChange={this.handleChange}>
            <option value="All">All sitters and nannies</option>
            <option value="Occasional Sitters">Occasional Sitters</option>
            <option value="Full time sitters">Full time sitters</option>
            <option value="Part time sitters">Part time sitters</option>
          </select><br/><br/><br/>
          About me:
          <input type="text" id="details" onChange={this.handleChange} />
          Posted:
          <input type="text" id="createdAt" onChange={this.handleChange} />
          <br />
          <button onClick={this.submitAttendee}>Apply</button>
        </form>
      </div>
    );
  }
}

export default Application;