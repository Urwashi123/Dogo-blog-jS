import React from "react";
import { useState } from "react";

export default function Hookusestate() 
{
  //defining state using react hook
  //hook -useState
  const [name, setName] = useState("");

  const updateName = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      Enter Your Name:
      <input type="text" onChange={updateName} />
      <br />
      <h2> NAME: {name}</h2>
    </div>
  );
}