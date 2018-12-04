import React from 'react';

class SearchNanny extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stype: 'All',
      place: 'All'

    };
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  submitForm(event) {
    event.preventDefault();
    this.props.handleSearch(this.state.place, this.state.stype);
  }

  
   
  

  render() {
    return (
       <div className="feed-list-item">
        <h2>Search Nannies</h2>
        <label>TYPE:</label><br/>

        <select id="stype" onChange={this.handleChange}>
          <option value="All">All sitters and nannies</option>
          <option value="Occasional Sitters">Occasional Sitters</option>
          <option value="Full time sitters">Full time sitters</option>
          <option value="Part time sitters">Part time sitters</option>
        </select><br/><br/><br/>
        <label>LOCATION:</label><br/>
        <select id="place" onChange={this.handleChange}>
         
          <option value="All">Search all Bay Area</option>
          <option value="San Francisco">San Francisco</option>
          <option value="San Jose">San Jose</option>
          <option value="Oakland">Oakland</option>
          <option value="Burlingame">Burlingame</option>
          <option value="Daly City">Daly City</option>
          <option value="Livermore">Livermore</option>
        </select>
        <button onClick={this.submitForm}>FIND</button>
      </div>
     
     );
  }
}

export default SearchNanny;


