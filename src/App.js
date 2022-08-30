import React from "react";
import logo from "./logo.svg";
import { Weather } from "./features/weather/Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Quote } from "./features/quote/Quote";
import { CarouselList } from "./features/carousel/CarouselList";
import { Goals } from "./features/goals/Goals";

function App() {
  return (
    <div className="App">
      <CarouselList />
      <Weather />
      <Quote />
      <Goals />
    </div>
  );
}

export default App;
