import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateinfo }) {
    let [city, setCity] = useState("");
    let [err, seterr] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "fec1e6845a9105dd2b767867101b4a9e";

    let getweatherinfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            };
            return result;
        } catch (err) {
            throw err;
        }
    };


    let handleChange = (evt) => {
        setCity(evt.target.value);

    };
    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            setCity("");
            let newinfo = await getweatherinfo();
            updateinfo(newinfo);
        } catch (err) {
            seterr(true);
        }
    };

    return (
        <div className='SearchBox'>
            <h1>Weather Info</h1>
            <h3>Search of the weather</h3>
            <form action="" onSubmit={handleSubmit}>

                <TextField id="city" label="City name" variant="outlined" required value={city} onChange={handleChange} />
                <br /><br />
                <Button variant="contained" type='submit'>
                    Search
                </Button>
                {err && <p style={{ color: "red" }}>No such place exist!</p>}
            </form>
        </div>
    )
}