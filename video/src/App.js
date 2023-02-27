import * as React from "react";
import { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import Button from "@mui/material/Button";

export default function App() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log("Hello");
  });

  return (
    <div className="App">
      {count}
      <button onClick={handleIncrease}>Increase</button>
      
    </div>
  );
}