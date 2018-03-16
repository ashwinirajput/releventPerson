import React from  'react';
import classes from './Cockpit.css';

import Aux from '../../hoc/Aux';

const cockpit = (props) =>{
    let btnclasses =classes.Button;
    if(props.showPerson){
        btnclasses = [classes.Button,classes.red].join(' ');
    }
    const assignedClasses=[];
    if(props.persons.length<=2){
      assignedClasses.push(classes.red);
    }
    if(props.persons.length<=1){
      assignedClasses.push(classes.bold);
    }
    return(
        <Aux>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button onClick={props.clicked} className={btnclasses}>Switch Name</button>
        </Aux>
    );
}

export default cockpit;