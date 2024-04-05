import React, { useEffect, useRef, useState } from "react";
import { CurrentLocation, Edit, NotCurrentLocation } from "../util/icon";
import Realtime from "../component/Realtime";
import Forecast from "../component/Forecast";

const WeatherCard = () => {
  const [showInput, setShowInput] = useState(false);
  const [location, setLocation] = useState("");
  const [showLocationIcon, setShowLocationIcon] = useState(false);
  const [currentWeather, setCurrentWeather] = useState({});
  const [forecastWeather, setForecastWeather] = useState({});
  const handleInput = () => setShowInput(!showInput);

  const inputRef = useRef();

  useEffect(() => {
    // Get the location when clicked on geolocation icon or at mounting the component
    if (!showLocationIcon) {
      const fetchLocation = async () => {
        try {
          if (typeof window !== "undefined" && "geolocation" in navigator) {
            const position = await new Promise((resolve, reject) => {
              navigator.geolocation.getCurrentPosition(resolve, reject);
            });
            const { latitude, longitude } = position.coords;
            console.log(`${latitude}, ${longitude}`);
            setLocation(`${latitude}, ${longitude}`);
          } else {
            console.log("Geolocation is not supported by this browser.");
          }
        } catch (error) {
          console.error("Error getting geolocation:", error);
        }
      };
      fetchLocation(); // Call the fetchLocation function
    }
  }, [showLocationIcon]);

  useEffect(() => {
    fetch(
      `https://api.tomorrow.io/v4/weather/realtime?location=${location}&apikey=PxlPQuC6vCWThDQP2s0ln6mTSw4RFqHO`
    )
      .then((res) => res.json())
      .then((res) => setCurrentWeather(res))
      .catch((err) => console.log(err));
  }, [location]);

  useEffect(() => {
    fetch(
      `https://api.tomorrow.io/v4/weather/forecast?location=${location}&apikey=PxlPQuC6vCWThDQP2s0ln6mTSw4RFqHO`
    )
      .then((res) => res.json())
      .then((res) => setForecastWeather(res))
      .catch((err) => console.log(err));
  }, [location]);

  const handleInputKeyword = (e) => {
    if (e.key === "Enter") {
      setLocation(inputRef.current.value);
      setShowInput(false);
      setShowLocationIcon(true);
    }
  };

  const handleGeolocation = () => setShowLocationIcon(false);

  console.log(currentWeather);
  console.log(forecastWeather);

  return (
    <div className="w-screem bg-gray-400 p-10">
      <div className="w-full bg-gray-500 p-5 rounded-md">
        <div className="flex items-center gap-2 w-full ">
          <div className="flex items-end gap-2 w-5/6">
            {showLocationIcon ? (
              <>
                <h1 className="text-5xl font-bold text-white">
                  {currentWeather?.location?.name}
                </h1>
              </>
            ) : (
              <>
                <p className="text-white text-2xl">lat, long : </p>
                <h1 className="text-4xl font-bold text-white">{location}</h1>
              </>
            )}
            {showInput && (
              <input
                className="absolute h-12 w-4/6 rounded-md outline-none px-4 placeholder:text-gray-300 bg-gray-400 text-white font-semibold text-xl"
                placeholder="Add City : e.g. banglore"
                type="text"
                ref={inputRef}
                onKeyUp={handleInputKeyword}
              />
            )}
          </div>
          <div className="ml-10 w-2/6 flex items-center justify-center gap-5">
            <button onClick={handleInput}>
              <Edit className="w-8 h-8 fill-white" />
            </button>
            {showLocationIcon ? (
              <button onClick={handleGeolocation}>
                <CurrentLocation className="w-8 h-8 fill-white" />
              </button>
            ) : (
              <NotCurrentLocation className="w-8 h-8 fill-gray-600" />
            )}
          </div>
        </div>
        <div className="flex w-full gap-2 flex-col lg:flex-row mt-5">
          <Realtime currentWeather={currentWeather} />
          <Forecast forecastData={forecastWeather} />
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
