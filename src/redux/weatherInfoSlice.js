import {createSlice} from "@reduxjs/toolkit";
import {getWeatherAction} from "./weatherActions";

const putWeatherInfo = createSlice(
    {
        name: 'putWeather',
        initialState: {message: 'Enter city name'},
        extraReducers: builder =>
        {
            builder
                .addCase(getWeatherAction.pending, state => {
                    state.message = 'reeeeggaaa...'
                })
                .addCase(getWeatherAction.rejected, state => {
                    state.message = 'Enter correct city name'
                })
                .addCase(getWeatherAction.fulfilled, (state, action) => {
                    state.weatherInfo = action.payload;
                    state.message = '';
                })
        }
    })

export default putWeatherInfo.reducer;