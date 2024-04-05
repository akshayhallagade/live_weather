import React, { useState } from "react";

const IndividualForecastCard = ({ individualValues, date }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const handlerDropdown = () => setShowDropDown((old) => !old);

  return (
    <div className="h-5/6 w-full overflow-auto p-2 flex items-center flex-col gap-2">
      <div className="w-full bg-gray-700 rounded-md p-4 relative">
        <button
          className={`absolute right-4 top-3 text-white text-3xl ${
            showDropDown ? "rotate-45" : "rotate-0"
          }`}
          onClick={handlerDropdown}
        >
          +
        </button>
        <div>
          <p className="text-gray-300">{date.split("T")[0]}</p>
          <h1 className="text-3xl text-white">
            {individualValues.temperatureAvg}°
          </h1>
        </div>
        {showDropDown ? (
          <div className="w-full h-fit mt-3">
            <p className="text-gray-300">
              Temp. Apparent :
              <span className="text-white font-semibold">
                {individualValues.temperatureAvg}°
              </span>
            </p>
            <p className="text-gray-300">
              Humidity :{" "}
              <span className="text-white font-semibold">
                {individualValues.humidityAvg}
              </span>
            </p>
            <p className="text-gray-300">
              Precipitation : {individualValues.humidityAvg}
            </p>
            <p className="text-gray-300">
              Visibility :
              <span className="text-white font-semibold">
                {individualValues.precipitationProbabilityAvg}
              </span>
            </p>
            <p className="text-gray-300">
              UV Index :
              <span className="text-white font-semibold">
                {individualValues.uvIndexAvg}
              </span>
            </p>
            <p className="text-gray-300">
              Windspeed :{" "}
              <span className="text-white font-semibold">
                {individualValues.windSpeedAvg}
              </span>
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

const Forecast = ({ forecastData }) => {
  const foreCastData = forecastData?.timelines?.daily;

  return (
    <div className="h-full w-full lg:w-1/2 p-4 bg-gray-600 rounded-md">
      <h3 className="text-3xl w-full text-white font-semibold px-2  hover:text-red-500 hover:underline">
        Forcast
      </h3>
      <div className="mt-4">
        {foreCastData ? (
          foreCastData.map((item) => (
            <IndividualForecastCard
              individualValues={item.values}
              date={item.time}
            />
          ))
        ) : (
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <p>Loading....</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Forecast;
