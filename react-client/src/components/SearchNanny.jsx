// import React from 'react';

// class SearchNanny extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       stype: 'All',
//       place: 'All'

//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.submitForm = this.submitForm.bind(this);
//   }

//   handleChange(event) {
//     this.setState({
//       [event.target.id]: event.target.value,
//     });
//   }

//   submitForm(event) {
//     event.preventDefault();
//     this.props.handleSearch(this.state.place, this.state.stype);
//   }

  
   
  

//   render() {
//     return (
//        <div className="feed-list-item">
//         <h2>Search Nannies</h2>
//         <label>TYPE:</label><br/>

//         <select id="stype" onChange={this.handleChange}>
//           <option value="All">All sitters and nannies</option>
//           <option value="Occasional Sitters">Occasional Sitters</option>
//           <option value="Full time sitters">Full time sitters</option>
//           <option value="Part time sitters">Part time sitters</option>
//         </select><br/><br/><br/>
//         <label>LOCATION:</label><br/>
//         <select id="place" onChange={this.handleChange}>
         
//           <option value="All">Search all Bay Area</option>
//           <option value="San Francisco">San Francisco</option>
//           <option value="San Jose">San Jose</option>
//           <option value="Oakland">Oakland</option>
//           <option value="Burlingame">Burlingame</option>
//           <option value="Daly City">Daly City</option>
//           <option value="Livermore">Livermore</option>
//         </select>
//         <button onClick={this.submitForm}>FIND</button>
//       </div>
     
//      );
//   }
// }

// export default SearchNanny;

import React from "react";

class SearchNanny extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stype: "All",
      place: "All"
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  submitForm(event) {
    event.preventDefault();
    this.props.handleSearch(this.state.place, this.state.stype);
  }

  render() {
    return (
      <article id="article1">
        <h2>New To Hiring A Nanny?</h2>
        <div className="line" />
        <div className="articleBody clear">
          <figure>
            <div className="inner-container">
              <div className="centered-content">
                <table
                  style={{textAlign:"left"}}
                  cellAdding="5"
                  cellSpacing="10"
                  width="400px"
                >
                  <tbody>
                    <tr>
                      <td>Search Nannies</td>
                    </tr>
                    <tr>
                      <td>Please choose your peference</td>{" "}
                    </tr>
                    <tr>
                      <td>
                        <select
                          id="stype"
                          onChange={this.handleChange}
                          width="300px"
                          fontSize="20px"
                        >
                          <option value="All">All sitters and nannies</option>
                          <option value="Occasional Sitters">
                            Occasional Sitters
                          </option>
                          <option value="Full time sitters">
                            Full time sitters
                          </option>
                          <option value="Part time sitters">
                            Part time sitters
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>Filter nannies by location:</td>
                    </tr>
                    <tr>
                      <td>
                        <select
                          id="place"
                          onChange={this.handleChange}
                          width="300"
                        >
                          <option value="All">Search all Bay Area</option>
                          <option value="San Francisco">San Francisco</option>
                          <option value="San Jose">San Jose</option>
                          <option value="Oakland">Oakland</option>
                          <option value="Burlingame">Burlingame</option>
                          <option value="Daly City">Daly City</option>
                          <option value="Livermore">Livermore</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <button onClick={this.submitForm}>FIND</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </figure>
          <p>
            Are you wondering if you made the right decision? One of the key
            elements is to trust your gut instinct. If you had a great
            interview, received outstanding references from applicant's former employers
            and had a great trial run, then you probably made the right
            decision. Also, don’t forget to make sure the care giver has a clear
            national criminal background check as well as
            current CPR and First Aid certification.
          </p>
          <p>
            It's easy to find what you need!
            If you want to Apply, please{" "}
            go to our Apply tag at navigation bar.
            Thank you for visiting our website.
          </p>
        </div>
      </article>
    );
  }
}

export default SearchNanny;
