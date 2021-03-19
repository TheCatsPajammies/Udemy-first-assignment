//1. Component called UserInput
import React from 'react';
import './UserInput.css';

function userInput(props) {
    return (
        <div className="UserInput">
            {/*2. UserInput holds an input element */}
            {/*7. Pass eventhandler method ref to userinput component and bind it to the input change event */}
            {/*8. Ensure the new input entered by the user overwrites the old username passed to userinput */}
            {/*9. Add two-way-binding to your input in userinput to also display the starting username */}
            <input type="text" label="UserInput" onChange={props.changed} value={props.currentName}>
            </input>
        </div>

    );
}

export default userInput;