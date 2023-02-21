import { useState, useEffect, lazy, Suspense } from "react"
import { useAtom } from "jotai"
import { weatherDataAtom } from "../../Atoms"

const Conditions = lazy(() => import("./Conditions/Conditions"))

type Props = {}

export default function Weather({ }: Props) {
  const [weatherData, setWeatherData] = useAtom(weatherDataAtom)
  const [location, setLocation] = useState<string>("Overland Park")
  const [zipCode, setZipCode] = useState<any>("")
  const [lat, setLat] = useState<number>(38.9928)
  const [lon, setLon] = useState<number>(-94.6771)

  const API_KEY = import.meta.env.VITE_API_KEY
  const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/onecall"
  const GEOLOCATION_API_URL = "https://api.openweathermap.org/geo/1.0/zip"
  const exclude = "current,minutely,hourly,alerts"
  const units = "imperial"
  const weatherUrl = `${WEATHER_API_URL}?lat=${lat}&lon=${lon}&exclude=${exclude}&units=${units}&appid=${API_KEY}`

  const fetchData = () => {
    fetch(weatherUrl)
      .then((res) => res.json())
      .then((res) => {
        setWeatherData(
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
  }

  useEffect(() => {
    fetchData()
  }, [location])

  const handleValidation = (event: any) => {
    event.preventDefault()
    const zip = event.target.zipCode
    if (zip.value.match(/\d+/g) && zip.value.length > 4) {
      getConditions(event)
    } else {
      alert("Please enter the correct US Zip Code")
    }
  }

  const getConditions = (event: any) => {
    event.preventDefault()
    const zip = event.target.zipCode
    const geolocationUrl = `${GEOLOCATION_API_URL}?zip=${zip.value}&appid=${API_KEY}`
    fetch(geolocationUrl)
      .then((res) => res.json())
      .then((res) => {
        setLocation(res.name)
        setLat(res.lat)
        setLon(res.lon)
      })
  }

  const handleSubmitForm = (event: any) => {
    event.preventDefault()
    handleValidation(event)
    setZipCode("")
  }

  return (
    <>
      <div className="flex flex-col text-center text-slate-300">
        <div className="text-2xl">Current Weather Forcast For</div>
        <div className="text-2xl">{location}</div>
        <div>
          Latitude: {lat} Logitude: {lon}
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center mt-5 gap-4 w-full">
        {!!weatherData &&
          weatherData.slice(0, 5).map((i: any, index: any) => {
            if (index === 0) {
              return (
                <div className="bg-violet-500 dark:bg-violet-400 rounded p-2 w-[100px] shadow-fd" key={index}>
                  <Suspense fallback={<div>Loading...</div>}>
                    <Conditions
                      weekDay={i.weekDay}
                      min={i.min}
                      max={i.max}
                      weatherType={i.weatherType}
                      weatherDesc={i.weatherDesc}
                    />
                  </Suspense>
                </div>
              )
            } else {
              return (
                <div className="bg-violet-400 dark:bg-violet-500 rounded p-2 w-[100px] shadow-fd" key={index}>
                  <Suspense fallback={<div>Loading...</div>}>
                    <Conditions
                      weekDay={i.weekDay}
                      min={i.min}
                      max={i.max}
                      weatherType={i.weatherType}
                      weatherDesc={i.weatherDesc}
                    />
                  </Suspense>
                </div>
              )
            }
          })}
      </div>

      <form className="my-5" onSubmit={handleSubmitForm}>
        <input className="rounded mx-2 px-3 py-1" name="zipCode" type="text" aria-label="zipCode" value={zipCode} onChange={event => setZipCode(event.target.value)} placeholder="Enter Zip code" >
        </input>
        <button className="bg-teal-400 rounded mx-2 px-3 py-1 w-fit" type="button">Check your Weather</button>
      </form>
    </>
  )
}