import React from "react";
import "./WeatherForecast.css"
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecastForecast(props) {
    return (
        <div className="WeatherForecast">
            <div className="row">
                {props.data.map(function(dailyForecast,index){
                    if(index<6){
                        return (
                            <div className="col-2 forecastElelement">
                                <WeatherForecastDay data={dailyForecast}/>
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