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
      <Weather cityName={"Limpopo"}/>
      <Weather />
      <footer>
      Coded by Sade and it is{" "}
       <a href='https://github.com/sademakhubele/react-weather-w5.git'>Open-sourced on github</a>
        
       </footer>
    </div>
  </div>
  );
}
