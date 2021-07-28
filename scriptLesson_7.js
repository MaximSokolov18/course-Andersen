const API_KEY = '5e4a694c6379ad3ea4353dcff926b2ae';
const WEATHER_URL = 'https://api.openweathermap.org/';
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
  const date = new Date(weather.dt * 1000).toDateString();
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
    `${WEATHER_URL}data/2.5/onecall?lat=${dataCity.coord.lat}&lon=${dataCity.coord.lon}&exclude=hourly,minutely,alerts&units=metric&appid=${API_KEY}`
  )
    .then((response) => response.json())
    .then((arrDataWeather) => {
      const weatherNow = arrDataWeather.current;
      const NUMBER_DAY = 4;
      console.log(
        `Country: ${dataCity.country}\nCity: ${dataCity.name}\nWeather now: ${weatherNow.temp}\u2103 ${weatherNow.weather[0].description}, wind speed ${weatherNow.wind_speed}m/s`
      );
      arrDataWeather.daily
        .slice(0, NUMBER_DAY)
        .forEach((weather) => showDataWeather(weather));
    })
    .catch((error) => {
      console.log(error);
    });
}

dataCitiesArray.forEach((obj) => weatherRequest(obj));
