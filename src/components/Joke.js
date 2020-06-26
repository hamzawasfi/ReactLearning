import React from "react";

function Joke(props) {
  return (
    <div>
      <h4>
        {props.question === undefined ? "" : "question: " + props.question}
      </h4>
      <p>answer: {props.answer}</p>
    </div>
  );
}

export default Joke;
