import React, { useEffect } from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    //Http request..
    const timer = setTimeout(() => {
      alert("Data saved to cloud!");
    }, 1000);
    return () => {
      clearTimeout(timer);
      console.log("[Cockpit.js] cleanup work in useEffect");
    }
  }, []);
  //It will run like ComponentDidMount if we send empty array to second argument in use effect

  //More than one definition is allowed
  //useEffect();

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] cleanup work in 2nd useEffect");
    }
  })

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
        <h1>{props.title}</h1>
        <p className={assignedClasses.join(" ")}>This is really working!!</p>
        <button className={buttonClasses} 
            onClick={props.clicked}>
          Show Persons
        </button>
      </div>
    );
}

export default cockpit;