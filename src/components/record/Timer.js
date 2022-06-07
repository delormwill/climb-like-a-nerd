import React from "react";

function Timer(props) {
  return (
    <div id="Timer">
      <span className="digits">
        {("0" + Math.floor(props.time / 3600)).slice(-2)}:
      </span>
      <span className="digits">
        {("0" + Math.floor((props.time / 60) % 60)).slice(-2)}:
      </span>
      <span className="digits">{("0" + (props.time % 60)).slice(-2)}</span>
    </div>
  );
}

export default Timer;
