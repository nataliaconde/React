import React, { useState, useEffect } from "react";
import Conditions from "../Conditions/Conditions";

import "./Forcast.css";

const Forecast = () => {
  const [data, setData] = useState();

  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_URL = process.env.REACT_APP_API_URL;
  const lat = 38.984764;
  const lon = -94.677658;
  const exclude = "current,minutely,hourly,alerts";
  const units = "imperial";
  const url = `${API_URL}?lat=${lat}&lon=${lon}&exclude=${exclude}&units=${units}&appid=${API_KEY}`;
  let test;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(
          res.daily.map((day, i) => {
            return {
              weekDay: day.dt,
              min: day.temp.min,
              max: day.temp.max,
              weatherType: day.weather[0].icon,
              weatherDesc: day.weather[0].description,
            };
          })
        );
      });
  }, [url]);

  return (
    <>
      <div>
        <h2>Current Weather Forcast For</h2>
        <h2>
          Latitude: {lat} Logitude: {lon}
        </h2>
      </div>
      <div className="forcast">
        {!!data &&
          data.slice(0, 4).map((i, index) => {
            if (index === 0) {
              return (
                <div className="today" key={index}>
                  <Conditions
                    weekDay={i.weekDay}
                    min={i.min}
                    max={i.max}
                    weatherType={i.weatherType}
                    weatherDesc={i.weatherDesc}
                  />
                </div>
              );
            } else {
              return (
                <div className="singleDay" key={index}>
                  <Conditions
                    weekDay={i.weekDay}
                    min={i.min}
                    max={i.max}
                    weatherType={i.weatherType}
                    weatherDesc={i.weatherDesc}
                  />
                </div>
              );
            }
          })}
      </div>
    </>
  );
};

export default Forecast;
