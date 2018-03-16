import React, { Component } from 'react';
import Person from './Person/Person';


export class Persons extends Component{
    constructor(props){
        console.log('[persons.js] Inside the constructor',props);
        super(props);
      }
      componentWillMount(){
        console.log('[persons.js] Inside the componentWillMount');
      }
      componentDidMount(){
        console.log('[persons.js] Inside the componentdidMount');
      }
    render(){
        return this.props.persons.map((person, index)=>{
            return <Person 
              click ={()=>this.props.clicked(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event)=>this.props.changed(event,person.id)}
              />
          })
    }
}

 export default Persons; 