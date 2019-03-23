import React from 'react';
import $ from 'jquery';
import axios from 'axios';

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      time: "Today",
      message:""
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
    
    // $.ajax({
    //   method: "POST",
    //   url: "/customers",
    //   data: this.state,

    //   success: data => {
    //     console.log(data);
    //   }
    // });
    axios.post("/customers", this.state);
    this.props.nannyClick(this.props.desc, 'sent')
  }

  render() {
    return (
      <div>
        <h3>Customer Information</h3>
        <form>
          First Name:
          <input type="text" id="firstName" onChange={this.handleChange} />
          Last Name:
          <input type="text" id="lastName" onChange={this.handleChange} />
          Your Email:
          <input type="text" id="email" onChange={this.handleChange} />
          When do you need help?
          <select id="time" onChange={this.handleChange}>
            <option value="Today">Today</option>
            <option value="Within few days">Within few days</option>
            <option value="Within two weeks">Within two weeks</option>
            <option value="Sometime this month">Sometime this month</option>
          </select><br/><br/><br/>
          Message:
          <input type="text" id="message" onChange={this.handleChange} />

          <br/><br/><br/>
          <button onClick={this.submitAttendee}>Send</button>
        </form>
      </div>
    );
  }
}

export default Confirmation;