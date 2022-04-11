import Toggle from "./toggle";
import "./App.css";
import { useState } from "react";

function App() {
  const [day, setDay] = useState(true);

  const onDayChanged = () => {
    setDay(!day);
  };

  return (
    <div
      className="app-container"
      style={{
        background: day ? "lightblue" : "black",
        display: "flex",
        height: "100vh",
      }}
    >
      <Toggle day={day} onClick={onDayChanged} />
    </div>
  );
}

export default App;
