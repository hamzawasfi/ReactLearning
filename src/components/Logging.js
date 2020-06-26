import React from "react";

function Logging(props) {
  return (
    <div>
      <h1>you are logged {props.logged ? "in" : "out"}</h1>
      <button onClick={() => props.handleLog()}>
        log {props.logged ? "out" : "in"}
      </button>
    </div>
  );
}

export default Logging;
