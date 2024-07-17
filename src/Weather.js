import React , { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props){
    const [weatherData, setWeatherData] = useState({ready : false});
    const [forecastWeatherData, setForecastWeatherData] = useState({ready : false});
    const [city, setCity] = useState(props.cityName);   
    function handleResponse (response){
        setWeatherData({
            ready: true,
            newCity: city,
            temperature: response.data.temperature.current,
            wind: response.data.wind.speed,
            humidity: response.data.temperature.humidity,
            description: response.data.condition.description,
            feelsLike: response.data.temperature.feels_like,
            icon: response.data.condition.icon_url,
            date: new Date(response.data.time *1000)

        })
        
    }
    function handleForecast(response){
        setForecastWeatherData({
            ready: true,
            forecast: response.data.daily
        })

    }

    
    function handleSubmit(event){
        event.preventDefault();
        search();
    }
    function handleCityChange(event){
        setCity(event.target.value);
        
    }
    function search(){
        let apiKey = "4bc76te01aac743d12o764377f46072e";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        let forecastApiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);
        axios.get(forecastApiUrl).then(handleForecast);

    }
    
    if (weatherData.ready){
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
        
    );
    } else {
        search();
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
            <div>
                <strong>Loading...</strong>
            </div>
            </div>
        );
    }
    
}