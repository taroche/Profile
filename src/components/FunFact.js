import React from "react";

const xhr = new XMLHttpRequest();

const FunFact = () => {
    return (
      <div>
        <p>Fun Fact about today</p>
        <p id="number"></p>
      </div>
    );
  };

  export default FunFact;