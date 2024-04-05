This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Assignment Overview:

Weather App which shows the current weather as well as shows the Weather forecast. This app consist minimalist user interface to show both the type of weather (current and forecast) in the single screen.

Initially, when page loads it shows weather as per the latitude longitude. We can click the edit icon to change the city by typing the name of the city, as we want. After fetching the city info. It umblocks the location icon to click. By Clicking on the location icon we can get weather as per geolocation again. After fetching the detailes and icon will become unclickable.

-Deployed Link :
https://live-weather-eight.vercel.app/

- using geolocation
  ![alt text](/public/image.png)

- using City
  ![alt text](/public/cityWeather.png)

## Available Scripts

In the project directory, you can run:

### `npm start`

### `npm test`

### `npm run build`

### `npm run eject`

## How to Run the Application

Follow below steps to run the appilcation.

1. Downlaod the reposiratory from Github.
2. run command "install i".
3. run command "npm run start".

## Dependencies used

1. Tailwind CSS
2. Router-Dom
3. React-Icons

## Installation Instructions:

1. Tailwind CSS

- run below commands

        npm install -D tailwindcss
        npx tailwindcss init

- Add the template in tailwind.config.js

        /** @type {import('tailwindcss').Config} */
        module.exports = {
        content: ["./src/**/*.{html,js}"],
        theme: {
            extend: {},
        },
        plugins: [],
        }

- Add the tailwind deliveries to CSS

        @tailwind base;
        @tailwind components;
        @tailwind utilities;

---

2. React-router-dom

- run the command
  npm i react-router-dom --save

---

3. React-icons

- run the command

        npm install @react-icons/all-files --save

## Configuration

1. util folder - containes icons files

## Issues and Troubleshooting

1. Used Free API which gives only 25req/hour. so, After the request quota exhaust data doesnt load in the application.
   If we are using app for commerical perpose then we can give pay for more request per hour.

## Contact

1. Reach out to me at --> akshayhallagade.work@gmail.com
