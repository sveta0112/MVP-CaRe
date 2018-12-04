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
      hourlyRate:"",
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

  submitAttendee() {
    axios.post("/nannies", this.state);
  }

  render() {
    return (
      <div>
        <form>
          First Name:
          <input type="text" id="firstName" onChange={this.handleChange} />
          Last Name:
          <input type="text" id="lastName" onChange={this.handleChange} />
          Age:
          <input type="text" id="age" onChange={this.handleChange} />
          Email:
          <input type="text" id="email" onChange={this.handleChange} />
          Location:
          <input type="text" id="location" onChange={this.handleChange} />
          Rate:
          <input type="text" id="hourlyRate" onChange={this.handleChange} />
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