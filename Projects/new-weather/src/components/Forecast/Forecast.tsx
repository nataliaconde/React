import React, { useState, useEffect } from "react"
import Conditions from "../Conditions/Conditions"

const Forecast = () => {
  const [data, setData] = useState<Array<string>>();

  const API_KEY = import.meta.env.VITE_API_KEY
  const API_URL = "http://api.openweathermap.org/data/2.5/onecall"
  const lat = 38.984764
  const lon = -94.677658
  const exclude = "current,minutely,hourly,alerts"
  const units = "imperial"
  const url = `${API_URL}?lat=${lat}&lon=${lon}&exclude=${exclude}&units=${units}&appid=${API_KEY}`
  let test
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(
          res.daily.map((day: any) => {
            return {
              weekDay: day.dt,
              min: day.temp.min,
              max: day.temp.max,
              weatherType: day.weather[0].icon,
              weatherDesc: day.weather[0].description,
            }
          })
        )
      })
  }, [url])

  return (
    <>
      <div className="flex flex-col">
        <div className="text-2xl">Current Weather Forcast For</div>
        <div>
          Latitude: {lat} Logitude: {lon}
        </div>
      </div>
      <div className="flex gap-3 justify-center my-5">
        {!!data &&
          data.slice(0, 4).map((i: any, index: any) => {
            if (index === 0) {
              return (
                <div className="bg-gray-200 rounded p-2 w-[100px]" key={index}>
                  <Conditions
                    weekDay={i.weekDay}
                    min={i.min}
                    max={i.max}
                    weatherType={i.weatherType}
                    weatherDesc={i.weatherDesc}
                  />
                </div>
              )
            } else {
              return (
                <div className="bg-gray-300 rounded p-2 w-[100px]" key={index}>
                  <Conditions
                    weekDay={i.weekDay}
                    min={i.min}
                    max={i.max}
                    weatherType={i.weatherType}
                    weatherDesc={i.weatherDesc}
                  />
                </div>
              )
            }
          })}
      </div>
    </>
  )
}

export default Forecast