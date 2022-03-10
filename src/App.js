import "./App.css";
import React, { useState, useRef, useEffect } from "react";

function App() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [origin, setOrigin] = useState("0,0");
  const [offset, setOffset] = useState(0);
  const [message, setMessage] = useState("");

  const widthInputRef = useRef();
  const heightInputRef = useRef();
  const originInputRef = useRef();
  const offsetInputRef = useRef();

  const submitHandler = (evt) => {
    evt.preventDefault();
    setWidth(+widthInputRef.current.value);
    setHeight(+heightInputRef.current.value);
    setOrigin(originInputRef.current.value);
    setOffset(+offsetInputRef.current.value);
  };

  useEffect(() => {
    let myOrigin = origin.split(",");
    let x = +myOrigin[0];
    let y = +myOrigin[1];
    console.log(`this is my x ${typeof x} and this is my y ${y}`);

    let pointA = [x - width / 2 - offset, y - height / 2 - offset];
    let pointB = [x + width / 2 + offset, y - height / 2 - offset];
    let pointC = [x + width / 2 + offset, y + height / 2 + offset];
    let pointD = [x - width / 2 - offset, y + height / 2 + offset];

    setMessage(`  Bottom-left [${pointA}], Bottom-right[${pointB}], Top-right[${pointC}],Top-left[${pointD}]`);
  }, [width, height, origin, offset]);

  return (
    <div className="App">
      <h1> Cartesian coordinates transformed</h1>
      <form className="form" onSubmit={submitHandler}>
        <label>Width</label>
        <input type="text" defaultValue="8" ref={widthInputRef}></input>
        <label>Height</label>
        <input type="text" defaultValue="8" ref={heightInputRef}></input>
        <label>Origin</label>
        <input type="text" defaultValue="0,0" ref={originInputRef}></input>
        <label>Offset</label>
        <input type="text" defaultValue="0" ref={offsetInputRef}></input>
        <button>Submit</button>
      </form>

      <h1>{message}</h1>
    </div>
  );
}

export default App;
