import { createRoot } from "react-dom/client";
//import ReactDOM from "react-dom";
import React, { Component } from "react";
import App from "./App";

//ReactDOM.render(<App />, document.querySelector("#root"));

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);
root.render(<App />);
