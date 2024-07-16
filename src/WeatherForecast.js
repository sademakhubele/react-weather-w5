import React from "react";
import "./WeatherForecast.css"
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecastForecast() {
    return (
        <div className="WeatherForecast">
            <div className="row">
                {weatherForecast.map(function(dailyForecast,index){
                    if(index<6){
                        return (
                            <div className="col-2 forecastElelement">
                                <weatherForecastDay data={dailyForecast}/>
                            </div>
                        );
                    } else {
                        return (
                            null
                        );
                    }
                    })}
            </div>
        </div>
    )
}