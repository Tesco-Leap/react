import "./App.css";
import UserOutput from "./Components/UserOutput";
import UserInput from "./Components/UserInput";
import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("kishan");

  const changeUsernameHandler = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div className="App">
      <button onClick={changeUsernameHandler}>Change Username</button>
      <UserInput updateName={changeUsernameHandler} username={username} />
      <UserOutput username={username} />
      <UserOutput username={username} />
    </div>
  );
}

export default App;
