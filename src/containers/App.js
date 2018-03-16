import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/withClass';
import otherApproch from '../hoc/otherApproch';
import Aux from '../hoc/Aux';
class App extends Component {
  state = {
    persons: [
      { id:'ancbd', name: 'Max', age: 28 },
      { id:'hgs', name: 'Manu', age: 28 },
      { id:'dsf', name: 'Stephanie', age: 28 }
    ],
    otherState:'some other value',
    showPerson: false
  }
  constructor(props){
    console.log('[App.js] Inside the constructor',props);
    super(props);
  }
  componentWillMount(){
    console.log('[App.js] Inside the componentWillMount');
  }
  componentDidMount(){
    console.log('[App.js] Inside the componentdidMount');
  }
  switchNameHandler = (name) => {
    //don't do this this.statate.persons[0].name ='max
    //we can't direclty change the value like this react not recognise it
    //this.state.persons[0].name = 'Maximilian';
    //so we use like this it look at the  state which part it overriding or changing it merge the old 
    //state with newone and leave other state unchanged
    this.setState({persons:[
      { name: name, age: 28 },
      { name: 'Manu', age: 28 },
      { name: 'Stephanie', age: 27 }
    ]})
  }
  deletePersonHandler =(personIndex)=>{
    // to create compy of person array slice coppy the array
    //alternative is es6 featue '...'js operator its spread out element in
    // this array  into list of element and simply get added into new array with object from old array
    //const persons = this.state.persons.splice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }
  nameChangeHandler=(event,id)=>{
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id===id;
    });
    const person ={
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;
    const persons = [... this.state.persons]
    persons[personIndex] = person;
    this.setState({persons:persons})

  }
  togglePerosnHandler=()=>{
    const toggle = this.state.showPerson;
    this.setState({showPerson:!toggle});
  }

  render() {
    console.log('[App.js] Inside the render');
    let persons =null;

    if(this.state.showPerson){
      persons= <Persons
            persons ={this.state.persons}
            clicked ={this.deletePersonHandler}
            changed = {this.nameChangeHandler}
          />
              {/* {
                this.state.persons.map((person, index)=>{
                  return <Person 
                    click={()=>this.deletePersonHandler(index)}
                    name={person.name} 
                    age={person.age}
                    key={person.id}
                    changed={(event)=>this.nameChangeHandler(event,person.id)}
                    />
                })
              } */}
              {/* <Person name={this.state.persons[0].name} age="28" />
              <Person name={this.state.persons[1].name} age="38" 
                click={this.switchNameHandler.bind(this,'Max!')}
                changed={this.nameChangeHandler}>My Hobbies: Racing</Person>
              <Person name={this.state.persons[2].name} age={this.state.persons[2].age} /> */};
    }
    return (
      <Aux>
        <Cockpit
          appTitle={this.props.title}
          showPerson ={this.state.showPerson}
          persons = {this.state.persons}
          clicked ={ this.togglePerosnHandler }
        />
        {persons}
      </Aux>
    );
  }
}

export default otherApproch(App,classes.App);
