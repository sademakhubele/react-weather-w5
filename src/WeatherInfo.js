import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherUnitConversion from "./WeatherUnitConversion";

export default function WeatherInfo(props){
    return (
        
        <div className="WeatherInfo">
        <div className="row detail">
                <div className="col-6 left-side">
                    <div className="row">
                        <div className="col-2">
                            <img src={props.data.icon} alt={props.data.description} className=" img-fluid weather-icon"/>
                        </div>
                        <div className="col-5">
                        <WeatherUnitConversion celsius={Math.round(props.data.temperature)}/>
                            </div>
                        
                        
                        <div className="col-5">
                            <ul>
                                <li>
                                    Feels Like: {Math.round(props.data.feelsLike)}ºC
                                </li>
                                <li>
                                    Humidity: {props.data.humidity}%
                                </li>
                                <li>
                                    Wind: {Math.round(props.data.wind)} m/s
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>
                <div className="col-6 right-side">
                   <h1 className="text-capitalize">Weather of {props.data.newCity}</h1>
                    <ul>
                        <li>
                            <FormattedDate date={props.data.date}/>
                        </li>
                        <li className="text-capitalize">
                            {props.data.description}
                        </li>

                    </ul>

                </div>
                
            </div>
            </div>
            );
}