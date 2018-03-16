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
      componentWillReceiveProps(nextProps){
        console.log('[update Personjs ] inside the component WillReciveProps' );
      }
      shouldComponentUpdate(nextProps,nextState){
        console.log('[update Personjs ] inside the component should component update' );
        return nextProps.persons !== this.props.persons;
      }
      componentWillUpdate(nextProps,nextState){
        console.log('[update Personjs ] inside the component will component update' );
      }
      componentDidUpdate(){
        console.log('[update Personjs ] inside the component didupdate' );
      }
    render(){
        return this.props.persons.map((person, index)=>{
            return <Person 
              click ={()=>this.props.clicked(index)}
              name={person.name} 
              age={person.age}
              position ={index}
              key={person.id}
              changed={(event)=>this.props.changed(event,person.id)}
              />
          })
    }
}

 export default Persons; 