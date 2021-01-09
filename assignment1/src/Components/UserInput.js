import React from "react";

const UserInput = (props) => {
  return (
    <div>
      <input onChange={props.updateName} value={props.username}></input>
    </div>
  );
};

export default UserInput;
