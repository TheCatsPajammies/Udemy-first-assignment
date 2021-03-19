// See the UserInput.css and UserOutput.css files for step 10.

import { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';




class App extends Component {
  //5. State definition needs to be before render() with a class based component.
  state = {
  
    users: [
    { userName: 'Paul', userFact: 'likes programming.' },
    
  ]

  }

  //6. Add method to manipulate the state (an eventHandler method)
  nameChangeHandler = (event) => {
    this.setState( {
      users: [
        { userName: event.target.value, userFact: 'likes pineapple on pizza.' },
        
      ]
    })
  } 

render() {


  return (
    
    <div className="App">
      <h1>First React assignment!</h1>
      {/* Pass event-handler method to userInput */}
      <UserInput 
      changed={this.nameChangeHandler}
      currentName={this.state.users[0].userName}/>
      {/*3. Multiple UserOutput components. */}
      {/*4. Pass username to useroutput components */}
      <UserOutput 
      name={this.state.users[0].userName} 
      fact={this.state.users[0].userFact} 
      />
      <UserOutput />
    </div>
  );
}}

export default App;
