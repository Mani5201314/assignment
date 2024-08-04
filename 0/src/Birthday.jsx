import React from "react";
import Data from "./Data";
import { useState } from "react";
import "./App.css";
const Birthday = () => {
  let [use, useset] = useState(Data);
  function clear() {
    useset(use.filter(Data => ""));
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1 id="head">{use.length} BirthDays</h1>
      {use.map(res => {
        return (
          <div id="day">
            <img id="img1" src={res.img} alt="" />
            <div style={{ paddingLeft: "100px" }}>
              <h5 style={{ textAlign: "center" }}>
                {res.name} <br />
                {res.age}
              </h5>
            </div>
          </div>
        );
      })}
      <button onClick={clear} id="clear">
        Clear
      </button>
    </div>
  );
};

export default Birthday;
