import React from "react";

function LogRep(props) {
  const rep = {
    user: "",
    style: "Flash",
    grade: props.value,
    attempts: "",
    rpe: "",
    title: "",
    note: "",
  };

  const handleClick = (event) => {
    props.handleAddRep(rep);
  };

  return (
    <button type="button" className="btn btn-warning" onClick={handleClick}>
      {props.value}
    </button>
  );
}

export default LogRep;
