import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {

    let buttonClasses = '';
        
    if(props.showPersons){
        buttonClasses = classes.Red;
    }

    let assignedClasses = [];
    if(props.persons.length <= 2){
      assignedClasses.push(classes.red); // classes will be red
    }

    if(props.persons.length <= 1)
    {
      assignedClasses.push(classes.bold); // classes will be bold
    }

    return (
      <div className={classes.Cockpit}>
        <h1>Hi, I'm a react</h1>
        <p className={assignedClasses.join(" ")}>This is really working!!</p>
        <button className={buttonClasses} 
            onClick={props.clicked}>
          Show Persons
        </button>
      </div>
    );
}

export default cockpit;