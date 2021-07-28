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
        `Country: ${dataCity.country}\nCity: ${dataCity.name}\nWeather now: ${weatherNow.temp}\u2103 ${weatherNow.weather[0].description}, wind speed ${weatherNow.wind_speed}m/s`
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
