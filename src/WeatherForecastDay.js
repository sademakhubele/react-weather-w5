import React from "react";

export default function WeatherForecastDay(props){
    console.log(props.data.condition.icon_url)
    function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }
  

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat","Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day+1];
  }
    return(
        <div>
            <div className="date">
                {day()}
            </div>
            <div className="icon">
                <img src={props.data.condition.icon_url} className="img-fluid" alt="hi"/>
            </div>
            <div>
                <span className="maxTemp">{maxTemperature()} </span>
                <span className="minTemp"> {minTemperature()}</span>
            </div>
        </div>
    );
}