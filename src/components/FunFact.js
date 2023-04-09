import React from "react";

const xhr = new XMLHttpRequest();
const d = new Date();
const m = d.getMonth();
const day = d.getDate();

xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const data = xhr.responseText;
        const funFact = data.charAt(0).toUpperCase() + data.slice(1);
        document.getElementById('number').textContent = funFact;
      } else {
        console.log('Error: ' + xhr.status);
      }
    }
  };



const FunFact = () => {
    return (
      <div>
        <p>Fun Fact about today</p>
        <p id="number"></p>
      </div>
    );
  };

  export default FunFact;