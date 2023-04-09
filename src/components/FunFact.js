import React from "react";
import { useState, useEffect } from 'react';

function FunFact() {
  const [funFact, setFunFact] = useState('');

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    const d = new Date();
    const m = d.getMonth();
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

    xhr.open('GET', `http://numbersapi.com/${day}/${m}/date?notfound=floor&fragment`, true);
    xhr.send();
  }, []);

  return (
    <div className="funfact">
        <h2>Fun Fact About Today!!</h2>
      <p>{funFact}</p>
    </div>
  );
}

  export default FunFact;