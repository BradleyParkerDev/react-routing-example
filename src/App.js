import logo from './logo.svg';
import './App.css';
import { useState } from "react";

import { Outlet } from "react-router-dom";

function App() {

  const [signupList, setSignupList] = useState([]);

  //handle sign up
  const handleAddSignUp = (firstName, lastName, email) => {
    const newSignup = {
      firstName, 
      lastName,
      email
    }
    setSignupList([...signupList, newSignup]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Outlet context={[signupList, handleAddSignUp]}/>
      </header>
    </div>
  );
}

export default App;
