import React, { Component } from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import otherApproch from '../../../hoc/otherApproch';
// they are dynamic due to test ,this does n't allow to change the application state
// application state change in few selected component also refered as container like app.js
export class Person extends Component{
    constructor(props){
        console.log('[person.js] Inside the constructor',props);
        super(props);
      }
      componentWillMount(){
        console.log('[person.js] Inside the componentWillMount');
      }
      componentDidMount(){
          if(this.props.position===0){
                this.inputElement.focus();
          }
        console.log('[person.js] Inside the componentdidMount');
      }

    render(){
        return (
                <Aux>
                    <h1 onClick={this.props.click}> I'm {this.props.name} and i am {this.props.age} years old!</h1>
                    <p>{this.props.children}</p>
                    <input 
                    ref={(inp)=>{this.inputElement=inp}}
                    type="text" defaultValue={this.props.name} onChange={this.props.changed} />
                </Aux>
            )
    }
} 

export default otherApproch(Person,classes.Person);
