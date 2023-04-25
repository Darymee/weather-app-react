import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import "./index.css";

import SearchForm from "./components/SearchForm/SearchForm";
import Location from "./components/Location/Location";
import Date from "./components/Date/Date";
import TodayReport from "./components/TodayReport/TodayReport";
import TodayInfo from "./components/TodayInfo/TodayInfo";
import Forecast from "./components/Forecast/Forecast";
import Signature from "./components/Signature/Signature";
import { useState } from "react";

export default function App() {
  const [weather, setWeather] = useState(null);

  function getCity(city) {
    let APIkey = "97c2f6a3b34509ac62090edc5d18d949";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`;
    axios.get(url).then((response) => setWeather(response.data));
    console.log(weather);
  }

  return (
    <div className="container mt-5">
      <div className="card shadow p-1 mb-5 rounded styled-card">
        <div className="card-body p-5">
          <SearchForm getCity={getCity} />
          <div className="row mb-5">
            <Location city={weather?.name} country={weather?.sys.country} />
            <Date date={weather?.dt} />
          </div>
          <div className="row">
            <TodayReport
              description={weather?.weather[0].description}
              temperature={weather?.main.temp}
            />
            <TodayInfo
              humidity={weather?.main.humidity}
              wind={weather?.wind.speed}
              pressure={weather?.main.pressure}
              icon_id={weather?.weather[0].icon}
            />
          </div>
          <Forecast />
        </div>
        <Signature />
      </div>
    </div>
  );
}
