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

    const isShowPanel = this.state.showPanel;
    console.log(isShowPanel);
    this.setState({
      showPanel: !isShowPanel
    });
  }



  render() {

    let persons = null;
    if (this.state.showPanel === true) {
      persons = (<div>
        {this.state.Persons.map(person => {
          return <Person 
                  name={person.name} 
                  age={person.age} />
        })}
      </div>)
    }

    return <div className="App">
      <button onClick={this.toogleFunc}>Toggle</button>
      <h1>I am React Application </h1>
      {persons}
    </div>
    //return React.createElement('div',{class:'App'},React.createElement('h1',null,'Alireza seif');
  }
}


export default App;
