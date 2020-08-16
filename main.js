document.getElementById("submit-button").addEventListener('click', function () {
    const cityName = document.getElementById("input-city-name").value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=` + `${cityName}` + `&appid=e8b703414eee51e1b29f2a4b8a154722&units=metric`)
        .then(response => response.json())
        .then(data => {
            const temperatureData = data.main.temp;
            document.getElementById('temperature').innerText = `${temperatureData} \xB0C`;
            document.getElementById("city-name").innerText = data.name;
            document.getElementById("feelsLike-temp").innerText = `Feels Like ${data.main.feels_like} \xB0C`;
            document.getElementById("weather-description").innerText = data.weather[0].description;
            document.getElementById("humidity").innerText = `Humidity ${data.main.humidity} %`;
            document.getElementById("wind-speed").innerText = `Wind Speed ${data.wind.speed} km/h`;
        })
})