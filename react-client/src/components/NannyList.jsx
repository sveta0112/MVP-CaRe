// import React, { Component } from "react";
// import NannyInfo from './NannyInfo.jsx';


// class NannyList extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
     
//     }
    

//   };

//   render() {
//     return(
//         <div >
//             <table id="ListTable"><thead><tr>
           
//             <th>Name</th>
//             <th>Last Name</th>
//             <th>Email</th>
// 	          <th>Location</th>
// 	          <th>Rate</th>
// 	          <th>Type</th>
	   
//             </tr></thead>
//             <tbody>
// 	            {this.props.info.map(nanny =>
// 	              <NannyInfo key={nanny._id} details={nanny} nannyClick={this.props.handleClick}/>
// 	            )}
//             </tbody>
//           </table>
//         </div>
//    );
//   }
// }

// export default NannyList;


import React, { Component } from "react";
import NannyInfo from "./NannyInfo.jsx";

class NannyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <article id="article2">
        <h2>Click on the list for more information!</h2>
        <div className="line" />
        <div>
          <table id="ListTable">
            <thead>
              <tr>
                <th>Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Location</th>
                <th>Rate</th>
                <th>Type</th>
                <th>More...</th>
              </tr>
            </thead>
            <tbody>
              {this.props.info.map(nanny => (
                <NannyInfo
                  key={nanny._id}
                  details={nanny}
                  nannyClick={this.props.handleClick}
                />
              ))}
            </tbody>
          </table>
        </div>
      </article>
    );
  }
}

export default NannyList;