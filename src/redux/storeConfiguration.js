import {configureStore} from "@reduxjs/toolkit";
import weatherReducer from "./weatherInfoSlice";

const store = configureStore({
    reducer: {
        weatherInfo: weatherReducer
    },
});

export default store;
