# Weather App

A simple weather application that fetches and displays real-time weather data based on the city entered by the user. This app uses the WeatherAPI service to retrieve weather details.

## Features
- Get current temperature, humidity, wind speed, and feels-like temperature.
- Displays an icon representing the weather condition.
- Reset button to clear the input and displayed data.
- User-friendly alerts for invalid input.

## Technologies Used
- HTML, CSS, JavaScript
- WeatherAPI for fetching weather data
- Fetch API for handling HTTP requests

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Ramanand-tomar/weather-app.git
   ```
2. Open the project folder and launch `index.html` in a browser.

## Usage
1. Enter the name of a city in the input box.
2. Click the "Submit" button to fetch weather data.
3. View the temperature, humidity, wind speed, and weather condition.
4. Click the "Reset" button to clear the input and weather data.

## API Integration
This application fetches weather data using the [WeatherAPI](https://www.weatherapi.com/). Ensure that you have a valid API key and replace it in the `api_key` variable inside the JavaScript file.

```js
const api_key = "YOUR_API_KEY"; // Replace with your actual API key
```

## Error Handling
- Alerts the user if the input field is empty.
- Displays an error message if the weather data cannot be fetched.

## Contributing
Feel free to fork this repository and contribute by submitting pull requests.

## License
This project is open-source and available under the MIT License.

## Author
Developed by [Ramanand Tomar](https://github.com/Ramanand-tomar).

