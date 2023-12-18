import { useState } from "react";

function App() {
  const [currentColour, setCurrentColour] = useState("white");
  function handleYesClick() {
    setCurrentColour("green");
  }
  function handleNoClick() {
    setCurrentColour("red");
  }
  return (
    <div id="app">
      <h1
        style={{
          color: currentColour,
        }}
      >
        CSS is great!
      </h1>
      <menu>
        <li>
          <button onClick={handleYesClick}>Yes</button>
        </li>
        <li>
          <button onClick={handleNoClick}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;
