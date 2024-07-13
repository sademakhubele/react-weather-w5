import React from "react";
import "./App.css";

export default function Footer() {
    return (
        <footer>
            This project was coded by <a href="https://github.com/sademakhubele" target="blank">
            {" "}
            Sade Makhubele{" "}
            </a>
            is open-sourced on 
            <a href="https://github.com/sademakhubele/react-weather-w5.git" target="blank">
            {" "}
            Github{" "}
            </a>
            and hosted on 
            <a href="https://react-weather-wk5.netlify.app/" target="blank">
            {" "}
            Netlify
            </a>
        </footer>
    );
}