import React from "react";

export default function WeatherUnitConversion(props){
    const [unit , setUnit] = useState("celsius");
    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }
    if(unit === "celsius"){
    return (
        <div className="WeatherUnitConversion">
        <span className="temperature">{props.celsius} </span> 
        <span className="unit">ºC</span>
        <span className="unit">|</span>
        <span className="unit"><a href="/" onClick={showFahrenheit}>ºF</a></span>
        </div>
    );
    } else {
        let fahrenheitValue = props.celsius*9/5 +32;
        return (
        <div className="WeatherUnitConversion">
        <span className="temperature">{Math.round(fahrenheitValue)} </span> 
        <span className="unit"><a href="/" onClick={showCelsius}>ºC</a></span>
        <span className="unit">|</span>
        <span className="unit">ºF</span>
        </div>
    );
    }
}