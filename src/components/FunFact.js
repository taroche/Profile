import React from "react";
import { useState, useEffect } from 'react';

function FunFact() {
  const [funFact, setFunFact] = useState('');

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    const d = new Date();
    const m = d.getMonth() + 1;
    const day = d.getDate();

    xhr.onload = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          const data = xhr.responseText;
          const funFactCap = data.charAt(0).toUpperCase() + data.slice(1);
          setFunFact(funFactCap);
        } else {
          console.log('Error: ' + xhr.status);
        }
      }
    };

    xhr.open('GET', `http://numbersapi.com/${m}/${day}/date`, true);
    xhr.send();
  }, []);

  return (
    <div className="funfact">
        <h3>Fun Fact About Today!!</h3>
      <p>{funFact}</p>
    </div>
  );
}

  export default FunFact;