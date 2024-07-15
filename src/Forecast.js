import React from "react";

export default function Forecast() {
    return (
        <div className="Forecast">
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