import React from "react";
import "./CharComponent.css";

const CharComponent = (props) => {
  return (
    <div className="charstyle" onClick={props.deleteCharacterHandler}>
      {props.char}
    </div>
  );
};

export default CharComponent;
