import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Aux from './hoc/Aux';

class App extends Component {

	state = {
		Person: [
		{ id:'1', name: 'manu' }
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
	deleteHandler = (index) => {
		const persons = [...this.state.Person];
		persons.splice(index,1);
		this.setState({Person:persons});
	}



  render() {
    const style = {
      color:'red'
	}
	const contentLbl = this.state.showContent?'Hide Content':'Show Content';

	let content = null;

	if(this.state.showContent){
		content = (
			<Aux>
				{
					this.state.Person.map( (person,index) =>{
						return <Person 
									clickEvent={this.clickHandler.bind(this,'testing')} 
									name={person.name}
									inputHandler={this.nameChangedhandler}    
									deleteEvent={() =>this.deleteHandler(index)}
									key={person.id}
								>   
									Children Elements
								</Person>

					})	
				}			
				<button onClick={this.clickHandler.bind(this,'manuuuuu')}> Click - binding method 1 with parameter</button> 
				<button onClick={ () => this.clickHandler('manuuuuu111')}> Click - binding method 2 with parameter (not recommended)</button>  {/* This might re render*/}
				<button onClick={this.clickHandler1} style={style}> Click without parameter</button>   
										
			</Aux>	
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
