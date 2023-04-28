// PART 1: SHOW A FORTUNE

function showFortune() {
  // TODO: get the fortune and show it in the fortune-text div
  fetch('/fortune')
    .then((response) => response.text())
    .then((fortune) => {
      const fortuneElement = document.querySelector('#fortune-text');
      fortuneElement.innerHTML = fortune;
    });
}

document.querySelector('#get-fortune-button').addEventListener('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();
  const zipcode = document.querySelector('#zipcode-field').value;
  const url = `/weather?zipcode=${zipcode}`;
  // TODO: request weather with that URL and show the forecast in #weather-info
  fetch(url)
    .then((response) => response.json())
    .then((jsonData) => {
      const weatherElement = document.querySelector('#weather-info');
      weatherElement.innerText = jsonData.forecast;
    });
}

document.querySelector('#weather-form').addEventListener('submit', showWeather);
