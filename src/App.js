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
    showUpdate: false,
    indexUpdate: null
  }

  insertPeople = () => {
    let name = document.querySelector("#NameElement").value;
    let age = document.querySelector("#AgeElement").value;
    var personList = this.state.Persons;
    personList.push({ name: name, age: age });
    this.setState({ Persons: personList });
    document.querySelector("#NameElement").value = "";
    document.querySelector("#AgeElement").value = "";
  }

  updatePerson = (indexPerson) => {
    this.setState({ indexUpdate: indexPerson });
    let personList = this.state.Persons.slice();
    let personSelected = personList[indexPerson];

    let showUpdateSates = this.state.showUpdate;
    this.setState({ showUpdate: !showUpdateSates });
    document.querySelector("#NameElement").value = personSelected.name;
    document.querySelector("#AgeElement").value = personSelected.age;
  }
  savePeople = () => {
    let indexUpdate = this.state.indexUpdate;
    let personList = this.state.Persons.slice();
    personList[indexUpdate].name = document.querySelector("#NameElement").value;
    personList[indexUpdate].age = document.querySelector("#AgeElement").value;
    this.setState({ personList: personList });
    document.querySelector("#NameElement").value = "";
    document.querySelector("#AgeElement").value = "";
    this.setState({ indexUpdate: null });
    this.setState({ showUpdate: false });

  }
  deletePerson = (indexPerson) => {
    let personList = this.state.Persons.slice();
    personList.splice(indexPerson, 1);
    this.setState({ Persons: personList });
  }


  render() {
    let style = {
      backgroundColor: 'blue',
      color: 'white'
    };

    let persons = null;

    let button = null;

    

    persons = (
      <div className="row">
        {this.state.Persons.map((person, index) => {
          return <Person
            key={index}
            updateClick={() => this.updatePerson(index)}
            deleteClick={() => this.deletePerson(index)}
            name={person.name}
            age={person.age} />
        })}
      </div>)

    button = (
      <div className="col-md-2">
        {this.state.showUpdate
          ? <button className="btn btn-info" onClick={this.savePeople}>Update Person</button>
          : <button style={style} className="btn" onClick={this.insertPeople}>Insert Person</button>
        }
      </div>)

    return <div className="App container">

      <h1>I am React Application </h1>
      <hr />
      <div className="row">
        <div className="col-md-2"></div>
        <div className="form-group col-md-3">

          <input type="text" id="NameElement" className="form-control" placeholder="Name" />
        </div>
        <div className="form-group col-md-3">

          <input type="text" id="AgeElement" className="form-control" placeholder="Age" />
        </div>
        {button}
      </div>
      <hr />
      {persons}
    </div>
    //return React.createElement('div',{class:'App'},React.createElement('h1',null,'Alireza seif');
  }
}


export default App;
