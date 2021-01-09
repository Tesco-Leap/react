import "./App.css";
import React, { useState } from "react";
import Validation from "./Components/Validation";
import CharComponent from "./Components/CharComponent";

function App() {
  const [value, setValue] = useState("");
  const [valueLength, setValueLength] = useState(0);

  // set value on change
  const inputChangeHandler = (event) => {
    setValue(event.target.value);
    setValueLength(event.target.value.length);
  };

  // remove character at index from string
  const deleteCharacterHandler = (index) => {
    const newValue = value.substring(0, index) + value.substring(index + 1);
    setValue(newValue);
    setValueLength(newValue.length);
  };

  // render every character indivisually in CharComponent
  const charList = value.split("").map((char, index) => {
    return (
      <CharComponent
        char={char}
        key={index}
        deleteCharacterHandler={() => deleteCharacterHandler(index)}
      />
    );
  });

  return (
    <div className="App">
      <input
        onChange={(event) => inputChangeHandler(event)}
        value={value}
      ></input>
      <p>Lenght of input is {valueLength}</p>
      <Validation textLength={valueLength} />
      {charList.map((char) => char)}
    </div>
  );
}

export default App;
