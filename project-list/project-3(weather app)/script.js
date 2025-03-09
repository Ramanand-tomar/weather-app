const api_key = "e8de83d4fffc44e8afe161622250803";

const search_val = document.getElementById("city-input");
const button = document.getElementById("sub");
const feels = document.getElementById("feels");
const humid = document.getElementById("humidity");
const temp = document.querySelector(".temperature");
const weather_data = document.querySelector(".icon"); // Fixing selection
const wind = document.getElementById("wind_speed");
const reset = document.querySelector(".reset");

function displayWeather(data) {
    if (!data.current) {
        console.error("Invalid data received", data);
        return;
    }

    const { temp_c, feelslike_c, humidity, wind_kph, condition } = data.current; // Corrected destructuring
    humid.innerHTML = `Humidity : ${humidity}%`;
    wind.innerHTML = `Wind Speed : ${wind_kph} kph`;
    feels.innerHTML = `Feels like : ${feelslike_c}`;
    temp.innerHTML = `Temperature is :  ${temp_c}°C `;
    weather_data.innerHTML = `<img src="${condition.icon}" alt="Weather Icon">`;
}

button.addEventListener('click', async () => {
    if (!search_val.value.trim()) {
        alert("Please enter a city name!");
        return;
    }

    try {
        const response = await fetch(
            `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${search_val.value}&aqi=yes`
        );
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error("Error fetching weather data:", error);
        if (!weather_data) {
            weather_data.innerHTML = "<p>Error fetching data</p>";
        }
    }
});

reset.addEventListener('click' , ()=>{
    search_val.value = ``;
    humid.innerHTML = ``;
    wind.innerHTML = ``;
    feels.innerHTML = ``;
    temp.innerHTML = ``;
    weather_data.innerHTML = ``;

})