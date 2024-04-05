import {createAsyncThunk} from "@reduxjs/toolkit";
import {apiKey, baseUrl} from "../utils/constants";

export const getWeatherAction = createAsyncThunk(
    'weather/fetchWeather',
    (city)=>fetch(`${baseUrl}?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data =>
            ({
                country: data.sys.country,
                city: data.name,
                temp: data.main.temp,
                pressure: data.main.pressure,
                sunset: data.sys.sunset,
                message: ""
            }))

)
