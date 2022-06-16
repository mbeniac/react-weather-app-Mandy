import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {}

  let apiKey = "c3be0ab72af9c5b189f134b093f111bc";
  let latitude = props.coordinates.lon;
  let longitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thur</div>

          <WeatherIcon code="01d" size={32} />

          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperatures-max">12 </span>
            <span className="WeatherForecast-temperatures-min">9</span>
          </div>
        </div>
      </div>
    </div>
  );
}
