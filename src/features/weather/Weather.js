import React, { Component, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { checkWeather, fetchAsync, selectWeather } from "./weatherSlice";

export function Weather(props) {
  // const [temp, setTemp] = useState(21);
  // const [city, setCity] = useState("Hamilton City");
  // const [description, setDescription] = useState("Cloudy, overcast clouds");
  // const [weatherIcon, setWeatherIcon] = useState("03d");
  const dispatch = useDispatch();
  const weather = useSelector(selectWeather);

  useEffect(() => {
    dispatch(fetchAsync());
  }, []);

  return (
    <>
      <Card>
        <Card.Header>Weather</Card.Header>
        <Card.Body>
          {Object.keys(weather).length !== 0 ? (
            <>
              <img
                src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
              />
              <p>
                {weather.temp} &#8451;, {weather.city}
              </p>
              <p>{weather.description}</p>
            </>
          ) : (
            <p>Oops... something went wrong :/</p>
          )}
        </Card.Body>
      </Card>
    </>
  );
}
