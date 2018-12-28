import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

	state = {
		Person: [
		{ name: 'manu' }
		],
		showContent: false
	}

	clickHandler = (val) => {
		this.setState({Person:[{name: val}]});
	}  
	clickHandler1 = () => {
		this.setState({Person:[{name: "No Name..."}]});
	} 
	nameChangedhandler = (event) =>{
		this.setState({Person:[{name: event.target.value}]});
	}
	showContentHandler = () => {
		const status = this.state.showContent;
		this.setState({showContent: !status});
	}



  render() {
    const style = {
      color:'red'
	}
	const contentLbl = this.state.showContent?'Hide Content':'Show Content';

	let content = null;

	if(this.state.showContent){
		content = (
			<div>
				<Person 
					clickEvent={this.clickHandler.bind(this,'testing')} 
					name={this.state.Person[0].name}
					inputHandler={this.nameChangedhandler}              
				>
					Children Elements
				</Person>   
				<button onClick={this.clickHandler.bind(this,'manuuuuu')}> Click - binding method 1 with parameter</button> 
				<button onClick={ () => this.clickHandler('manuuuuu111')}> Click - binding method 2 with parameter (not recommended)</button>  {/* This might re render*/}
				<button onClick={this.clickHandler1} style={style}> Click without parameter</button>   						
			</div>	
		);
	}

    return (
      <div className="App">
        <header className="App-header">
			<button onClick={this.showContentHandler} >{contentLbl}</button>
			{ content }
        </header>
      </div>
    );
  }
}

export default App;
