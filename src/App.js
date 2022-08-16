
import Search from "./components/search/search"
import CurrentWeather from "./components/current-weather/CurrentWeather";
import './App.css'
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api"
import { useState } from "react";
import Forecast from "./components/forecast/Forecast";
function App() {
  const [currentWeather, setCurrentWeather] = useState(null)
  const [currentForecast, setCurrentForecast] = useState(null)

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ")
    const CurrentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    const CurrentWeatherForecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    Promise.all([CurrentWeatherFetch, CurrentWeatherForecastFetch])
      .then(async (res) => {
        const weatherRes = await res[0].json()
        const forecastRes = await res[1].json()
        setCurrentForecast({ city: searchData.label, ...forecastRes })
        setCurrentWeather({ city: searchData.label, ...weatherRes })
      })

      .catch((err) => console.log(err))
    console.log(currentForecast)
    console.log(currentWeather)
  }
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {currentForecast && <Forecast data={currentForecast} />}
    </div>
  );
}
export default App