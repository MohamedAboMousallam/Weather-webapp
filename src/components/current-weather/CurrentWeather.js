import "./CurrentWeatherStyle.css"

export default function CurrentWeather({data}) {
    return (
        <div className="weather">
            <div className="top">
                <p className="city">{data.city}</p>
                <p className="description"> {data.weather[0].description}</p>
                <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />

            </div>
            <div className="bottom">
                <p className="temp">{Math.floor(data.main.temp)} °C</p>
                <div className="details">
                    <div className="paramter-row">
                        <span className="paramter-label top">Details</span>
                    </div>
                    <div className="paramter-row">
                        <span className="paramter-label">Feels Like</span>
                        <span className="paramter-value">{Math.floor(data.main.feels_like)}°C</span>
                    </div>
                    <div className="paramter-row">
                        <span className="paramter-label">Wind</span>
                        <span className="paramter-value">{data.wind.speed} m/s</span>
                    </div>
                    <div className="paramter-row">
                        <span className="paramter-label">Humidity</span>
                        <span className="paramter-value">{data.main.humidity}%</span>
                    </div>
                    <div className="paramter-row">
                        <span className="paramter-label">pressure</span>
                        <span className="paramter-value">{data.main.pressure} Pa</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

