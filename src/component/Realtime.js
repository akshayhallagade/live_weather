import React from "react";

const Realtime = ({ currentWeather }) => {
  const weatherData = currentWeather?.data?.values;

  return (
    <div className="w-full lg:w-1/2 p-5 flex item-center justify-start flex-col gap-5 bg-gray-600 rounded-md ">
      <h3 className="text-3xl text-white font-semibold hover:text-red-500 hover:underline">
        Realtime
      </h3>
      <h1 className="text-9xl text-white font-bold">
        {weatherData ? weatherData.temperature + "°" : "..."}
      </h1>
      <div className="grid grid-cols-2 grid-flow-row gap-y-4 py-4 px-2">
        <div className="flex gap-2 text-xl">
          <p className="text-gray-300 font-semibold">Temp. Apparent :</p>
          <p className="text-white font-bold">
            {weatherData ? weatherData.temperatureApparent + "°" : "..."}
          </p>
        </div>
        <div className="flex gap-2 text-xl">
          <p className="text-gray-300 font-semibold">Humidity : </p>
          <p className="text-white font-bold">
            {weatherData ? weatherData.humidity : "..."}
          </p>
        </div>
        <div className="flex gap-2 text-xl">
          <p className="text-gray-300 font-semibold">Precipitation : </p>
          <p className="text-white font-bold">
            {weatherData ? weatherData.precipitationProbability + "mm" : "..."}
          </p>
        </div>
        <div className="flex gap-2 text-xl">
          <p className="text-gray-300 font-semibold">Visibility : </p>
          <p className="text-white font-bold">
            {weatherData ? weatherData.visibility + "Km/h" : "..."}
          </p>
        </div>
        <div className="flex gap-2 text-xl">
          <p className="text-gray-300 font-semibold">Windspeed : </p>
          <p className="text-white font-bold">
            {weatherData ? weatherData.windSpeed + "Km/h" : "..."}
          </p>
        </div>
        <div className="flex gap-2 text-xl">
          <p className="text-gray-300 font-semibold">UV Index : </p>
          <p className="text-white font-bold">
            {weatherData ? weatherData.uvIndex : "..."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Realtime;
