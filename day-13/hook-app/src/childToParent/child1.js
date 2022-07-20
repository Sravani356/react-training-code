import React from "react";
import Child from "../Architecture/child";

function Child1(props) {
  const handleClick = () => {
    props.onRequest("Can I have the car?");
  };



  return (
    <div data-testid="test2">
      <h2>Child</h2>
      <button data-testid="child-btn" onClick={handleClick}>Ask for the Car</button>

    </div>
  );
}

export default Child1;
