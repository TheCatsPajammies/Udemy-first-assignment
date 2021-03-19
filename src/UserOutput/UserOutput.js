//1. Component called UserOutput
import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            {/*2. UserOutput returns two paragraph elements with text of choice */}
            {/*4. Pass userName of your choice to UserOutput via props and display it there */}
            <p>User name/fact: {props.name} {props.fact}</p>
            <p>Pineapple belongs on pizza.</p>
            <p>One time I saw a ghost!</p>
        </div>
        
    )
}

export default userOutput;