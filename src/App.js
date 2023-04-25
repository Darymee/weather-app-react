import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";

import SearchForm from "./components/SearchForm/SearchForm";
import Location from "./components/Location/Location";
import Date from "./components/Date/Date";
import TodayReport from "./components/TodayReport/TodayReport";
import TodayInfo from "./components/TodayInfo/TodayInfo";
import Forecast from "./components/Forecast/Forecast";
import Signature from "./components/Signature/Signature";

export default function App() {
  return (
    <div className="container mt-5">
      <div className="card shadow p-1 mb-5 rounded styled-card">
        <div className="card-body p-5">
          <SearchForm />
          <div className="row mb-5">
            <Location />
            <Date />
          </div>
          <div className="row">
            <TodayReport />
            <TodayInfo />
          </div>
          <Forecast />
        </div>
        <Signature />
      </div>
    </div>
  );
}
