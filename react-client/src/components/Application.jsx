import React from 'react';
import $ from 'jquery';
import axios from 'axios';

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {}
      // firstName: "",
      // lastName: "",
      // email: "",
      // location:"Search all Bay Area",
      // hourlyRate:"$12.50",
      // sitterType:"All sitters and nannies",
      // details: "",
      // createdAt: ""

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
      fields["location"] = "Search all Bay Area";
      fields["hourlyRate"] = "$12.50";
      fields["sitterType"] = "All sitters and nannies";
      fields["details"] = "";
      fields["createdAt"] = "";
      axios.post("https://nanny-demo.herokuapp.com/nannies", this.state.fields);
      this.props.nannyClick(this.props.desc, 'applyConfirmation')
    }
  }

  validateForm(){
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
         <div id="register2">
         <br/>
           <h3>Please fill out the form:</h3>
           <form onSubmit={this.submitAttendee}>
             <label>First Name:</label>
             <input type="text" id="firstName" onChange={this.handleChange} />
             <div className="errorMsg">{this.state.errors.firstName}</div>

             <label>Last Name:</label>
             <input type="text" id="lastName" onChange={this.handleChange} />
             <div className="errorMsg">{this.state.errors.lastName}</div>


             <label>Email:</label>
             <input type="text" id="email" onChange={this.handleChange} />
             <div className="errorMsg">{this.state.errors.email}</div>


             <label>Location:</label>
             <select id="location" onChange={this.handleChange}>
                <option value="All">Search all Bay Area</option>
                <option value="San Francisco">San Francisco</option>
                <option value="San Jose">San Jose</option>
                <option value="Oakland">Oakland</option>
                <option value="Burlingame">Burlingame</option>
                <option value="Daly City">Daly City</option>
                <option value="Livermore">Livermore</option>
             </select><br/><br/><br/>

             <label>Rate:</label>
             <select id="hourlyRate" onChange={this.handleChange}>
                <option value="$12.50">$12.50</option>
                <option value="$15.00">$15.00</option>
                <option value="$20.00">$20.00</option>
                <option value="$25.00">$25.00</option>
                <option value="$32.50">$32.50</option>
             </select><br/><br/><br/>


             <label>Type:</label>
             <select id="sitterType" onChange={this.handleChange}>
                <option value="All">All sitters and nannies</option>
                <option value="Occasional Sitters">Occasional Sitters</option>
                <option value="Full time sitters">Full time sitters</option>
                <option value="Part time sitters">Part time sitters</option>
             </select><br/><br/><br/>


             <label>About me:</label>
             <textarea type="text" className="apply" id="details" onChange={this.handleChange}></textarea>

             <label>Posted:</label>
             <input type="text" id="createdAt" onChange={this.handleChange} />
             <br/>
             <input type="submit" className="button" value="Apply"/>




           </form>
         </div>
       </div>


      
    );
  }
}

export default Application;