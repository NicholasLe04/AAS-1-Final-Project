import React from "react";
import "./definitions.css";

const Definitions = () => {
  const data = [
      { word: "apple", definition: "A fruit with a red or green skin and a white inside" },
      { word: "banana", definition: "A long curved fruit with a yellow skin" },
      { word: "cherry", definition: "A small, round fruit with a red skin and a stone inside" },
      { word: "date", definition: "A sweet brownish fruit that grows on palm trees" },
      { word: "elderberry", definition: "A small, round fruit with a dark purple skin and a stone inside" },
      { word: "fig", definition: "A soft sweet fruit with a thin skin and small seeds inside" }
  ];

  return (
    <div className="grid">
      {data.map((item, index) => (
        <div className="item" key={index}>
          <div className="word">{item.word}</div>
          <div className="definition">{item.definition}</div>
        </div> 
      ))}
    </div>
  );
};

export default Definitions;