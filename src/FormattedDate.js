import React from "react";


export default function FormattedDate(props){
    
    let day = props.date.getDay();
    let hour = props.date.getHours();
    if (hour < 10){
        hour = `0 ${hour}`;
    }
    let minutes = props.date.getMinutes();
    if (minutes < 10){
        minutes = `0 ${minutes}`;
    }
    let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return (
        <div>
            {weekDay[day]} {hour}:{minutes}
        </div>
    );
}