## qBee Weather

This is a simple weather app that uses the OpenWeatherMap API to display the current weather conditions for a given city.

### Features

-   Search for a city by name
-   Get current location of the user
-   View the current weather conditions for the city
-   View the 5 day forecast for the selected city
-   View the current weather conditions for the user's current location
-   Responsive design

### Built With Stack

-   [React](https://reactjs.org/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [OpenWeatherMap API](https://openweathermap.org/api)

### Demo

https://qubrat.github.io/qbeeweather/

### Disclaimer

Design of the app is heavily inspired by [this](https://www.youtube.com/watch?v=QMwyNnjAils) video by [codewithsadee](https://www.youtube.com/@codewithsadee). Kudos for the great work!

### Screenshots

<div style="display: flex;">
      <img src="https://github.com/qubrat/qbeeweather/blob/master/screenshots/dt.png" height="300" style="margin-right: 20px;">
      <img src="https://github.com/qubrat/qbeeweather/blob/master/screenshots/t.png" height="300">
</div>

<div style="display: flex;">
   <img src="https://github.com/qubrat/qbeeweather/blob/master/screenshots/m1.png" height="400" style="margin-right: 20px;">
   <img src="https://github.com/qubrat/qbeeweather/blob/master/screenshots/m2.png" height="400" style="margin-right: 20px;">
   <img src="https://github.com/qubrat/qbeeweather/blob/master/screenshots/m3.png" height="400">
</div>

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
