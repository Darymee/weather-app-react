import React, { useEffect, useState } from "react";

import axios from "axios";

import { TailSpin } from "react-loader-spinner";

import ForecastItem from "../ForecastItem/ForecastItem";

export default function Forecast({ coordinates }) {
  const [isLoading, setIsLoading] = useState(true);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setIsLoading(true);
  }, [coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setIsLoading(false);
  }

  function getForecast() {
    const APIkey = "ft62c1a34b0c40fe3oc6a889fc79e401";
    let url = `https://api.shecodes.io/weather/v1/forecast?lon=${coordinates.longitude}&lat=${coordinates.latitude}&key=${APIkey}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  if (!isLoading) {
    return (
      <ul className="list-group list-group-horizontal row">
        {forecast.map(function (data, index) {
          if (index !== 0 && index <= 5) {
            return (
              <ForecastItem
                key={index}
                max={Math.round(data.temperature.maximum)}
                min={Math.round(data.temperature.minimum)}
                day={data.time * 1000}
                icon={data.condition.icon_url}
              />
            );
          } else {
            return null;
          }
        })}
      </ul>
    );
  } else {
    getForecast();
    return (
      <TailSpin
        height="40"
        width="40"
        color="#19376D"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass="container mt-5 justify-content-center"
        visible={true}
      />
    );
  }
}
