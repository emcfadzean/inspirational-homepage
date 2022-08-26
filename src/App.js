import React from "react";
import logo from "./logo.svg";
import { Weather } from "./features/weather/Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Quote } from "./features/quote/Quote";

function App() {
  return (
    <div className="App">
      <Weather />
      <Quote />
    </div>
  );
}

export default App;
