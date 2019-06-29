import React, { Component } from 'react';
import Person from './person/person';
import './App.css';

class App extends Component {
  state = {
    Persons: [
      { name: 'ali', age: 12 },
      { name: 'mohammad', age: 14 },
      { name: 'reza', age: 20 }
    ],
    showPanel: false
  }
  toogleFunc = () => {
    
    const isShowPanel  = this.state.showPanel;
    console.log(isShowPanel);
    this.setState({
      showPanel: !isShowPanel
    });
  }



  render() {
    return <div className="App">
      <button onClick={this.toogleFunc}>Switch Name</button>
      <h1>I am React Application </h1>
      {
      this.state.showPanel ?
          <div>
            <Person name={this.state.Persons[0].name} age={this.state.Persons[0].age} >I am Alireza</Person>
            <Person name={this.state.Persons[1].name} age={this.state.Persons[1].age} >He is Brother</Person>
            <Person name={this.state.Persons[2].name} age={this.state.Persons[2].age} >He is Brother</Person>
          </div>
          : null
         
      }
    </div>
    //return React.createElement('div',{class:'App'},React.createElement('h1',null,'Alireza seif');
  }
}


export default App;
