import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import { TailSpin } from "react-loader-spinner";

import "./index.css";

import SearchForm from "./components/SearchForm/SearchForm";
import Location from "./components/Location/Location";
import UpdateDate from "./components/UpdateDate/UpdateDate";
import TodayReport from "./components/TodayReport/TodayReport";
import TodayInfo from "./components/TodayInfo/TodayInfo";
import Forecast from "./components/Forecast/Forecast";
import Signature from "./components/Signature/Signature";
import { useState } from "react";

export default function App() {
  const [weather, setWeather] = useState({ isLoading: true });
  const [city, setCity] = useState("Kharkiv");

  function handleResponse(response) {
    setWeather({
      isLoading: false,
      // coordinates: response.data.coord,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      pressure: response.data.temperature.pressure,
      date: new Date(response.data.time),
      description: response.data.condition.description,
      icon_url: response.data.condition.icon_url,
      wind: response.data.wind.speed,
      city: response.data.city,
      country: response.data.country,
    });
  }

  function getCity() {
    const APIkey = "ft62c1a34b0c40fe3oc6a889fc79e401";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${APIkey}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  if (weather.isLoading) {
    getCity();
    return (
      <TailSpin
        height="80"
        width="80"
        color="#19376D"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass="container mt-5 justify-content-center"
        visible={true}
      />
    );
  } else {
    return (
      <div className="container mt-5 pt-5">
        <div className="card shadow p-1 mb-5 rounded styled-card">
          <div className="card-body p-5">
            <SearchForm getCity={setCity} resetData={setWeather} />
            <div className="row mb-5">
              <Location city={weather.city} country={weather.country} />
              <UpdateDate date={weather.date} />
            </div>
            <div className="row">
              <TodayReport
                description={weather.description}
                temperature={weather.temperature}
              />
              <TodayInfo
                humidity={weather.humidity}
                wind={weather.wind}
                pressure={weather.pressure}
                icon_url={weather.icon_url}
              />
            </div>
            <Forecast />
          </div>
          <Signature />
        </div>
      </div>
    );
  }
}
