import React from 'react';
import $ from 'jquery';
import axios from 'axios';


//
class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
      // firstName: "",
      // lastName: "",
      // email: "",
      // time: "Today",
      // message:""
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitAttendee = this.submitAttendee.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.id] = e.target.value;
    this.setState({
      fields
      //[e.target.id]: e.target.value
    });
  }

 

 
  submitAttendee(e) {
    e.preventDefault();
    if(this.validateForm()){
      let fields = {};
      fields["firstName"] = "";
      fields["lastName"] = "";
      fields["email"] = "";
      fields["time"] = "";
      fields["message"] = "";
      this.setState({fields: fields});
      //alert("Form submitted");
      axios.post("/customers", this.state.fields);
      this.props.nannyClick(this.props.desc, 'sent')
    }
    // $.ajax({
    //   method: "POST",
    //   url: "/customers",
    //   data: this.state,

    //   success: data => {
    //     console.log(data);
    //   }
    // });
    
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if(!fields["firstName"]){
      formIsValid = false;
      errors["firstName"] = "*Please enter your name";
    }

    if(typeof fields["firstName"] !== undefined){
      if(!fields["firstName"].match(/^[a-zA-Z ]*$/)){
        formIsValid = false;
        errors["firstName"] = "*Please enter alphabet characters only";
      }else if(fields["firstName"].length < 3){
        formIsValid = false;
        errors["firstName"] = "*Minimum 3 characters required";
      }
    }


    if(!fields["lastName"]){
      formIsValid = false;
      errors["lastName"] = "*Please enter your  lastname";
    }

    if(typeof fields["lastName"] !== undefined){
      if(!fields["lastName"].match(/^[a-zA-Z ]*$/)){
        formIsValid = false;
        errors["lastName"] = "*Please enter alphabet characters only";
      }else if(fields["lastName"].length < 4){
        formIsValid = false;
        errors["lastName"] = "*Minimu 4 characters required";
      }
    }


    if (!fields["email"]) {
        formIsValid = false;
        errors["email"] = "*Please enter your email.";
    }

    if (typeof fields["email"] !== undefined) {
      //regular expression for email validation
      var pattern = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
      if (!pattern.test(fields["email"])) {
        formIsValid = false;
        errors["email"] = "*Please enter valid email.";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }



  render() {
    return (
      <div id="main-registration-container">
        <div id="register">
        <br/>
          <h3>Customer Information</h3>
          <form  onSubmit={this.submitAttendee}>
            <label>First Name:</label>
            <input type="text" id="firstName" onChange={this.handleChange}/>
            <div className="errorMsg">{this.state.errors.firstName}</div>

            <label>Last Name:</label>
            <input type="text" id="lastName" onChange={this.handleChange}/>
            <div className="errorMsg">{this.state.errors.lastName}</div>

            <label>Email:</label>
            <input type="text" id="email" onChange={this.handleChange}/>
            <div className="errorMsg">{this.state.errors.email}</div>

            <label>When do you need help?</label>
            <select id="time" onChange={this.handleChange}>
             <option value="Choose time">Choose time</option>
              <option value="Today">Today</option>
              <option value="Within few days">Within few days</option>
              <option value="Within two weeks">Within two weeks</option>
              <option value="Sometime this month">Sometime this month</option>
            </select><br/><br/><br/>

            <label>Message</label>
            <textarea type="text" className="cust" id="message" onChange={this.handleChange} ></textarea>
            
            <br/><br/><br/>
           <input type="submit" className="button" value="Send"/>
          </form>
        </div>
      </div>





      
    );
  }
}

export default Confirmation;

