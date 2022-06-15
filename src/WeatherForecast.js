import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecastDay">Thur</div>
          <WeatherIcon code="01d" />
          <div className="WeatherForecastTemperatures">
            <span className="WeatherForecastTemperatureMax">12 </span>
            <span className="WeatherForecastTemperatureMin">9</span>
          </div>
        </div>
      </div>
    </div>
  );
}
