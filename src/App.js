import React from 'react';
import Weather from './Weather';
import './App.css';

export default function App() {
  return(
  <div className='App'>
    <div className='container'>
    <h1>
      Weather Forecast
    </h1>
      <Weather cityName={"Lisbon"}/>
      <footer>
      Coded by Saba and it is{" "}
       <a href='https://github.com/SabaKD/react-weather-application'>Open-sourced on github</a>
        
       </footer>
    </div>
  </div>
  );
}
