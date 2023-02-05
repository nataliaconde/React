import React from "react";

const Conditions = (props) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date(props.weekDay * 1000).getDay();
  let day = weekday[d];

  return (
    <>
      <div>{day}</div>
      <img
        src={`https://openweathermap.org/img/wn/${props.weatherType}.png`}
        alt={`${props.weatherDesc}`}
      />
      <div>
        {Math.round(props.min)}
        {"\u00b0"} {Math.round(props.max)}
        {"\u00b0"}
      </div>
    </>
  );
};
export default Conditions;
