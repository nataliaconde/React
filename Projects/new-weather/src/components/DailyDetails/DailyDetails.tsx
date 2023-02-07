import React from "react"

const DailyDetails = (props: any) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date(props.weekDay * 1000).getDay()
  let day = weekday[d]

  return (
    <>
      <div>{day}</div>
      <img
        className="mx-auto"
        src={`https://openweathermap.org/img/wn/${props.weatherType}.png`}
        alt={`${props.weatherDesc}`}
      />{props.weatherDesc}
      <div>
        {Math.round(props.min)}
        {"\u00b0"} {Math.round(props.max)}
        {"\u00b0"}
      </div>
      {props.humidity}
    </>
  )
}
export default DailyDetails
