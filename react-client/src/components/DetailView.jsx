import React from 'react';


class DetailView extends React.Component {
	constructor(props){
	  super(props);
	}

	render(){
		return(
           <div className="post">
             <h1 className="post-title">{this.props.desc.firstName} {this.props.desc.lastName}</h1>
    
             <div className="post-byline">{this.props.desc.details}</div>
             <button onClick={() => this.props.nannyClick(this.props.desc, 'confirm')}>Contact</button>
          </div>  
		);
	}
  
   
}


export default DetailView;