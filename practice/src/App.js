import { useState } from "react";
import "./App.css";

// Import Components
import Video from "./components/Video";
import Sec from "./components/Sec";

function App() {
  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(false);

  const increment = () => {
    setCounter(counter + 1);
  };

  const toggler = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div className="App">
      {/* <h1 className={toggle ? "hide" : ""}>Hello react</h1>
      <h2>Counter {counter}</h2>
      <button onClick={increment}>Click</button>
      <button onClick={toggler}>Click</button> */}
      <Sec toggling={toggle} />
      <Video count={counter} toggling={toggler} />
    </div>
  );
}

export default App;
