import React from 'react';

const validation = (props) => {
    let textContent = null;

    if(props.textLength < 5){
        textContent = (
            <p>Text too short!</p>
        );    
    }
    else{
        textContent = (
            <p>Text long enough</p>
        );
    }

    return (
        <p>{textContent}</p>
    );
}

export default validation;