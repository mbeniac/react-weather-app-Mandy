import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <p>
          This project was created by Mandy Beniac and it is
          <a
            href="https://github.com/mbeniac/react-weather-app-Mandy"
            target="_block"
          >
            {" "}
            open-sourced on GitHub{" "}
          </a>
        </p>
      </div>
    </div>
  );
}
