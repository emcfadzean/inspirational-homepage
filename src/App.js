import React from "react";
import logo from "./logo.svg";
import { Weather } from "./features/counter/weather/Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather />
    </div>
  );
}

export default App;
