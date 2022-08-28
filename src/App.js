import React from "react";
import logo from "./logo.svg";
import { Weather } from "./features/weather/Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Quote } from "./features/quote/Quote";
import { CarouselList } from "./features/carousel/CarouselList";

function App() {
  return (
    <div className="App">
      <Weather />
      <CarouselList />
      <Quote />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
        crossorigin="anonymous"
      />

      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
        integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp"
        crossorigin="anonymous"
      ></link>
    </div>
  );
}

export default App;
