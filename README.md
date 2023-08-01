## qBee Weather

This is a simple weather app that uses the OpenWeatherMap API to display the current weather conditions for a given city.

### Features

-   Search for a city by name
-   Get current location of the user
-   View the current weather conditions for the city
-   View the 5 day forecast for the selected city
-   View the current weather conditions for the user's current location
-   Responsive design

### Demo

https://qubrat.github.io/qbeeweather/

### Built With Stack

-   [React](https://reactjs.org/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [OpenWeatherMap API](https://openweathermap.org/api)

### Installation on local machine

1. Clone the repo
    ```sh
    git clone https://github.com/qubrat/qbeeweather.git
    ```
2. Install NPM packages
    ```sh
    npm install
    ```
3. Create a .env file in the root directory and add your OpenWeatherMap API key
   Go to https://openweathermap.org/api and sign up for an account to get an API key. Then add the following line to your .env file:

    ```js
    OPEN_WEATHER_API_KEY = YOUR_API_KEY_HERE;
    ```

4. Run the app
    ```sh
    npm start
    ```
5. Open http://localhost:5173/qbeeweather/ to view it in the browser.
