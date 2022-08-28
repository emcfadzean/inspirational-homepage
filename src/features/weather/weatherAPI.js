// Latitude and Longitude for Hamilton City, NZ (Coordinates: 37.7826° S, 175.2528° E)
const latitude = "-37.7826";
const longitude = "175.2528";
const query = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=`;
const api_key = process.env.REACT_APP_KEY;
const sample_output = {
  coord: {
    lon: 175.2528,
    lat: -37.7826,
  },
  weather: [
    {
      id: 804,
      main: "Clouds",
      description: "overcast clouds",
      icon: "04d",
    },
  ],
  base: "stations",
  main: {
    temp: 287.45,
    feels_like: 287.42,
    temp_min: 287.12,
    temp_max: 288.31,
    pressure: 1008,
    humidity: 95,
  },
  visibility: 10000,
  wind: {
    speed: 2.68,
    deg: 332,
    gust: 6.26,
  },
  clouds: {
    all: 96,
  },
  dt: 1661461802,
  sys: {
    type: 2,
    id: 2007451,
    country: "NZ",
    sunrise: 1661453415,
    sunset: 1661493129,
  },
  timezone: 43200,
  id: 7910041,
  name: "Hamilton City",
  cod: 200,
};

export function fetchWeather() {
  return fetch(query + api_key);

  // console.log(sample_output);
  // new Promise((resolve) =>
  //   setTimeout(() => resolve({ data: sample_output }), 500)
  // );
}
