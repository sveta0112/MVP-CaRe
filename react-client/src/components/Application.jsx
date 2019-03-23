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
      location:"Search all Bay Area",
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
    axios.post("https://nanny-demo.herokuapp.com/nannies", this.state);
    this.props.nannyClick(this.props.desc, 'applyConfirmation')
    
  }

  render() {
    return (
      <div>
        <h3>Please fill out the form:</h3>
        <form>
          First Name:
          <input type="text" id="firstName" onChange={this.handleChange} />
          Last Name:
          <input type="text" id="lastName" onChange={this.handleChange} />
          Email:
          <input type="text" id="email" onChange={this.handleChange} />
          Location:
          <select id="location" onChange={this.handleChange}>
            <option value="All">Search all Bay Area</option>
            <option value="San Francisco">San Francisco</option>
            <option value="San Jose">San Jose</option>
            <option value="Oakland">Oakland</option>
            <option value="Burlingame">Burlingame</option>
            <option value="Daly City">Daly City</option>
            <option value="Livermore">Livermore</option>
          </select><br/><br/><br/>
          
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
          <br /><br/><br/>
          <button onClick={this.submitAttendee}>Apply</button>
        </form>
      </div>
    );
  }
}

export default Application;