import React , {useState} from "react";
import axios from "axios";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready : false});
    const [forecastWeather, setForecastWeatherData] = useState({ready : false});
    const [city, setCity] = useState(props.cityName);

    function handleResponse (response) {
        setWeatherData({
            ready: true,
            newCity: city,
            temperature: response.data.temperature.current,
            wind: response.data.wind.speed,
            humidity: response.data.temperature.humidity,
            description: response.data.condition.description,
            feelsLike: response.data.temperature.feelsLike,
            icon: response.data.icon_url,
            date: new Date(response.data.time *1000)

        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange() {
        setCity(event.target.value);
    }

    function search() {
        let apiKey = "c6f8ef4575250284954db9f4dfa7a996"
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        let forecastApiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);
        axios.get(forecastApiUrl).then(handleForecast);

    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city.." className="form-control" autoFocus="on" onChange={handleCityChange}/>
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary w-100"/>
                    </div>
                </div>
            </form>
            <WeatherInfo data={weatherData}/>
            <WeatherForecast data={forecastWeatherData.forecast }/>
            

        </div>
        )
    }

    return (

        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter city" className="form-search" onChange={handleCityChange} autoFocus="on"></input>
                    </div>
                    <div className="col-3">
                        <input type="submit" value={search} className="btn btn-danger w-100"></input>
                    </div>
                </div>
            </form>
            <div>
                <strong>Loadind...</strong>
            </div>
            <div>
            </div>
        </div>
    )
}