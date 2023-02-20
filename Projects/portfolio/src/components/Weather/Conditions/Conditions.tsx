type Props = {
  weekDay: number
  min: number
  max: number
  weatherType: String
  weatherDesc: String
}

export default function Conditions(conditionsData: Props) {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]

  const d = new Date(conditionsData.weekDay * 1000).getDay()
  let day = weekday[d]

  return (
    <>
      <div>{day}</div>
      <img
        className="mx-auto"
        src={`https://openweathermap.org/img/wn/${conditionsData.weatherType}.png`}
        alt={`${conditionsData.weatherDesc}`}
      />
      <div>
        {Math.round(conditionsData.min)}
        {"\u00b0"} {Math.round(conditionsData.max)}
        {"\u00b0"}
      </div>
    </>
  )
}
