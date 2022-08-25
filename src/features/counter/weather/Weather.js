import React, { Component, useState } from "react";
import { Card } from "react-bootstrap";
import { fetchWeather } from "./weatherAPI";

export function Weather(props) {
  const [temp, setTemp] = useState(21);
  const [city, setCity] = useState("Hamilton City");
  const [description, setDescription] = useState("Cloudy, overcast clouds");

  return (
    <>
      <Card>
        <Card.Header>Weather</Card.Header>
        <Card.Body>
          <p>
            {temp} &#8451;, {city}
          </p>
          <p>{description}</p>
        </Card.Body>
        {fetchWeather()}
      </Card>
    </>
  );
}
