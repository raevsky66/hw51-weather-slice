import React from 'react';
import {useSelector} from "react-redux";

const Weather = () =>
{
    const weatherInfo = useSelector(state => state.weatherInfo.weatherInfo);
    const message = useSelector(state => state.weatherInfo.message);
    return (
        <div className={'infoWeath'}>{!message && <div>
            <p>Location: {weatherInfo.country}, {weatherInfo.city}</p>
            <p>Temp: {weatherInfo.temp}</p>
            <p>Pressure: {weatherInfo.pressure}</p>
            <p>Sunset: {new Date(weatherInfo.sunset * 1000).toLocaleTimeString()}</p>
        </div>}
            <p>{message}</p>
        </div>
    );
};


export default Weather;