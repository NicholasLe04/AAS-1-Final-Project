import React from "react";
import "./definitions.css";

const definitions = require('../definitions.json');

const Definitions = () => {
  

  return (
    <div className="grid">
      {definitions.map((item, index) => (
        <div className="item" key={index}>
          <div className="word">{item.word}</div>
          <div className="definition">{item.definition}</div>
        </div> 
      ))}
    </div>
  );
};

export default Definitions;