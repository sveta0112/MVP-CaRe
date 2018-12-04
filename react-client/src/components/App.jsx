// import React from 'react';
// import SearchNanny from './SearchNanny.jsx';
// import NannyList from './NannyList.jsx';
// import DetailView from './DetailView.jsx';
// import Confirmation from './Confirmation.jsx';
// import Application from './Application.jsx';
// import Sent from './Sent.jsx';
// import $ from 'jquery';


// class App extends React.Component {
// 	constructor(){
// 		super();
// 		this.state = {
//       view: 'default',
//       data: [],
//       lastNanny: ''
// 		}
//     this.getNanny = this.getNanny.bind(this);
//     this.searchNanny = this.searchNanny.bind(this);
//     this.nannyHandler = this.nannyHandler.bind(this);
// 	}
  
//   getNanny(){
//     $.ajax({
//       method: 'GET',
//       url:'/nannies',
//       success: (data) => {
//         this.setState({
//           data: data
//         })
//       }
//     })
//   }

//   componentDidMount(){
//     this.getNanny();
//   }
//   searchNanny(location, type){
//     $.ajax({
//       method:'GET',
//       url:'/nannies/' +location +'/' +type,
//       success: (data) => {
//         this.setState({
//           data: data,
//           view: "default"
//         })
//       }
//     })
//   }
//   changeView(option){
//     this.setState({
//       view: option
//     })
//   }

//   nannyHandler(nanny, option){
//     this.setState({
//       view: option,
//       lastNanny: nanny
//     })
    
//   }

//   renderView(){
//     const { view } = this.state;
//     if(view === "default"){
//       return (
//         <div>
//           <SearchNanny handleSearch={this.searchNanny}/>
//           <NannyList info={this.state.data} handleClick={this.nannyHandler}/>
//         </div>
//       );

//     } else if (view === "nannyInfo"){
//       return <DetailView desc={this.state.lastNanny} nannyClick={this.nannyHandler}/>
//     } else if (view === "confirm"){
//       return <Confirmation desc={this.state.lastNanny} view={this.state.view} nannyClick={this.nannyHandler}/>
//     } else if(view === "apply"){
//       return <Application desc={this.state.data}/>
//     } else if (view === "sent"){
//       return <Sent view={this.state.view} desc={this.state.lastNanny} nannyClick={this.nannyHandler}/>
//     }
        
        
//   }
//   render(){
// 		return(
//       <div>
//         <div className="nav">
//           <span className="logo"
//             onClick={() => this.changeView("default")}>
//             CarE.com
//           </span>
//           <span className={this.state.view === "default"
//             ? 'nav-selected'
//             : 'nav-unselected'}
//             onClick={() => this.changeView('default')}>
//             Home
//           </span>
          
//           <span className={this.state.view === 'apply'
//             ? 'nav-selected'
//             : 'nav-unselected'}
//              onClick={() => this.changeView('apply')}>
//             Apply

//           </span>
//         </div>

//         <div className="main">
//           {this.renderView()}
//         </div>

//       </div>
// 		);
// 	}
// }
// export default App;




import React from "react";
import SearchNanny from "./SearchNanny.jsx";
import NannyList from "./NannyList.jsx";
import DetailView from "./DetailView.jsx";
import Confirmation from "./Confirmation.jsx";
import Application from "./Application.jsx";
import AdminView from './AdminView.jsx';
import Sent from "./Sent.jsx";
import Result from "./Result.jsx";
import $ from "jquery";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: "default",
      data: [],
      lastNanny: ""
    };
    this.getNanny = this.getNanny.bind(this);
    this.searchNanny = this.searchNanny.bind(this);
    this.nannyHandler = this.nannyHandler.bind(this);
    this.addAplication = this.addAplication.bind(this);
  }

  getNanny() {
    $.ajax({
      method: "GET",
      url: "/nannies",
      success: data => {
        this.setState({
          data: data
        });
      }
    });
  }

  componentDidMount() {
    // this.getNanny();
  }
  searchNanny(location, type) {
    $.ajax({
      method: "GET",
      url: "/nannies/" + location + "/" + type,
      success: data => {
        this.setState({
          data: data,
          view: "default2"
        });
      }
    });
  }
  changeView(option) {
    this.setState({
      view: option
    });
  }

  nannyHandler(nanny, option) {
    this.setState({
      view: option,
      lastNanny: nanny
    });
  }

  addAplication(application){
     
  }

  renderView() {
    const { view } = this.state;
    if (view === "default") {
      return (
        <div>
          <SearchNanny handleSearch={this.searchNanny} />
          {/* <NannyList info={this.state.data} handleClick={this.nannyHandler} /> */}
        </div>
      );
    } else if (view === "default2") {
      return (
        <NannyList info={this.state.data} handleClick={this.nannyHandler} />
      );
    } else if (view === "nannyInfo") {
      return (
        <DetailView
          desc={this.state.lastNanny}
          nannyClick={this.nannyHandler}
        />
      );
    } else if (view === "confirm") {
      return (
        <Confirmation
          desc={this.state.lastNanny}
          view={this.state.view}
          nannyClick={this.nannyHandler}
        />
      );
    } else if (view === "apply") {
      return <Application desc={this.state.data}  nannyClick={this.nannyHandler}/>;
    } else if (view === "sent") {
      return (
        <Sent
          view={this.state.view}
          desc={this.state.lastNanny}
          nannyClick={this.nannyHandler}
        />
      );
    } else if (view === "admin"){
      return <AdminView/>
    } else if(view === "applyConfirmation"){
      return (
        <Result
          view={this.state.view}
          resultClick={this.nannyHandler}
        />
      );
    }
  }
  render() {
    return (
      <div>
        <section id="page">
          <header>
            <hgroup>
              <h1>CarE Locator</h1>
              <h3>With us, it’s easy!</h3>
            </hgroup>

            <nav className="clear">
              <ul>
                <li>
                  <a onClick={() => this.changeView("default")}>Home</a>
                </li>
                <li>
                  <a onClick={() => this.changeView("apply")}>Apply</a>
                </li>

                <li>
                  <a onClick={() => this.changeView("admin")}>Admin</a>
                </li>

              </ul>
            </nav>
          </header>

          <section id="articles">
            <div className="line" />
            <div>{this.renderView()}</div>
          </section>
          <footer>
            <div className="line" />
            <p>Copyright 2019 - CarE.com</p>
          </footer>
        </section>
      </div>
    );
  }
}
export default App;
