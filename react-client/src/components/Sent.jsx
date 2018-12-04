import React from 'react';


const Sent = (props) =>{
	return(
      <div>
         <h2>Request Sent</h2>
         <p>Keep an eye on your inbox, <a href={props.view === 'nannyInfo'}>{props.desc.firstName}</a> will respond soon</p>
      </div>
	);
}
	
export default Sent;