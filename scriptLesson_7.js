const API_KEY = '5e4a694c6379ad3ea4353dcff926b2ae';
const dataCitiesArray = [
  {
    id: 710791,
    name: 'Cherkasy',
    state: '',
    country: 'UA',
    coord: {
      lon: 32.062069,
      lat: 49.428539,
    },
  },
  {
    id: 6362115,
    name: 'Valencia',
    state: '',
    country: 'ES',
    coord: {
      lon: -0.35457,
      lat: 39.45612,
    },
  },
];

function showDataWeather(weather) {
  const date = new Date(Number(`${weather.dt}000`)).toDateString();
  console.log(
    `\u23A2 Date: ${date} \u23A2  \u23A2 Temp (max/min): ${Math.round(
      weather.temp.max
    )}\u2103/${Math.round(weather.temp.min)} \u2103 \u23A2  \u23A2 Weather: ${
      weather.weather[0].description
    } \u23A2  \u23A2 Wind: ${weather.wind_speed}m/s \u23A2  \u23A2 Humidity: ${
      weather.humidity
    }% \u23A2`
  );
}

function weatherRequest(dataCity) {
  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${dataCity.coord.lat}&lon=${dataCity.coord.lon}&exclude=hourly,minutely,alerts&units=metric&appid=${API_KEY}`
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      return console.log(
        `Network request failed with response ${response.status}:${response.statusText}`
      );
    })
    .then((arrDataWeather) => {
      const weatherNow = arrDataWeather.current;
      console.log(
        `Country: ${dataCity.country}\nCity: ${dataCity.name}\n
        Weather now: ${weatherNow.temp}\u2103 ${weatherNow.weather[0].description}, 
        wind speed ${weatherNow.wind_speed}m/s`
      );
      arrDataWeather.daily
        .filter((item, index) => index < 4)
        .forEach((weather) => showDataWeather(weather));
    })
    .catch((error) => {
      console.log(error);
    });
}

dataCitiesArray.forEach((obj) => weatherRequest(obj));
