import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {getWeatherAction} from "../redux/weatherActions";

const Form = () =>
{
    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const handleClick = () =>
    {
        dispatch(getWeatherAction(city));
        setCity('');
    }

    return (
        <div>
            <input type={'text'} placeholder={'City name'} onChange={e => setCity(e.target.value)} value={city}/>
            <button onClick={handleClick}>Get weather</button>
        </div>
    );
}


export default Form;