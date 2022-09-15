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
      <Card
        className="text-muted"
        style={{ position: "fixed", top: 0, right: 0 }}
      >
        {Object.keys(weather).length !== 0 ? (
          <>
            <p style={{ padding: "10px 10px 0px 10px", margin: 0 }}>
              <img
                style={{ position: "absolute", top: -18, right: -20 }}
                src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                width="40px"
                height="40px"
              />
              {weather.temp} &#8451;, {weather.city}
            </p>
            <p style={{ padding: "0px 10px 10px 10px", margin: 0 }}>
              {weather.description}
            </p>
          </>
        ) : (
          <p>Oops... something went wrong :/</p>
        )}
      </Card>
    </>
  );
}
