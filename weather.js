const searchButton = document.querySelector("#searchButton");
searchButton.addEventListener("click", () => returnWeather());

async function returnWeather() {
  const searchBox = document.querySelector("#searchBox").value;
  const weatherResults = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchBox}&appid=87bda22374e78c24f3a9dfc0e0fc9bf9&units=imperial`
  );

  const json = await weatherResults.json();
  const info = json.main;
  console.log(info);
  const weatherCard = document.getElementById("weatherCard");
  weatherCard.innerHTML = "";
  function getInfo(info) {
    const temperature = document.createElement("h3");
    const feelsLike = document.createElement("h3");
    const tempMax = document.createElement("h3");
    const tempMin = document.createElement("h3");
    const humidity = document.createElement("h3");
    temperature.innerHTML = info.temp;
    feelsLike.innerHTML = info.feels_like;
    tempMax.innerHTML = info.temp_max;
    tempMin.innerHTML = info.temp_min;
    humidity.innerHTML = info.humidity;
    const tempNote = document.createElement("h4");
    const feelsNote = document.createElement("h4");
    const maxNote = document.createElement("h4");
    const minNote = document.createElement("h4");
    const humidityNote = document.createElement("h4");
    tempNote.innerText = "Today's temperature is:";
    feelsNote.innerText = "It feels like:";
    maxNote.innerText = "Today's maximum temp:";
    minNote.innerText = "Today's minimum temp:";
    humidityNote.innerText = "humidity %:";
    weatherCard.append(
      tempNote,
      temperature,
      feelsNote,
      feelsLike,
      maxNote,
      tempMax,
      minNote,
      tempMin,
      humidityNote,
      humidity
    );
  }
  getInfo(info);
}
returnWeather();

const weeklySearchButton = document.querySelector("#weeklySearchButton");
weeklySearchButton.addEventListener("click", () => weeklyWeather());

async function weeklyWeather() {
  const weeklySearchBox = document.querySelector("#weeklySearchBox").value;
  const weeklyWeatherResults = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${weeklySearchBox}&appid=87bda22374e78c24f3a9dfc0e0fc9bf9&units=imperial`
  );

  const json = await weeklyWeatherResults.json();
  const stats = json.list;
  const weeklyWeatherCard = document.getElementById("weeklyWeatherCard");

  function getStats(stats) {
    for (let i = 0; i < 7; i++) {
      console.log(stats[i].main);
      const div = document.getElementById("weekDiv");
      const temperature = document.createElement("h3");
      temperature.innerHTML = stats[i].main.temp;
      div.append(temperature);
      weeklyWeatherCard.append(div);
    }
  }
  getStats(stats);
}
weeklyWeather();
