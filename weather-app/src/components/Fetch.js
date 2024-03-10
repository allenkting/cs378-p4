import '../App.css';
import { useState, useEffect } from 'react';
import TempInfo from './TempInfo';


const Fetch = ({cityName}) => {
    
    let geoUrl = "https://geocoding-api.open-meteo.com/v1/search?name=" + cityName + "&count=1&language=en&format=json";
    const [info, setInfo] = useState({});
    useEffect(() => {
        fetch(geoUrl)
        .then((res) => {return res.json()})
        .then((data) => {
            console.log(data);
            setInfo(data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [geoUrl]);

    let lat = 0//info.latitude;
    let long = 0//info.longitude;
    let tempUrl = "https://api.open-meteo.com/v1/forecast?temperature_unit=fahrenheit" + 
                    "&latitude=" + lat + "&longitude=" + long + "&hourly=temperature_2m"
    const [temps, setTemps] = useState([]);
    const [times, setTimes] = useState([]);

    useEffect(() => {
        fetch(tempUrl)
        .then((res) => {return res.json()})
        .then((data) => {
            console.log(data);
            setTemps(data.hourly.temperature_2m.slice(0,11));
            setTimes(data.hourly.time.slice(0,11));
        })
        .catch((error) => {
            console.log(error);
        });
    }, [tempUrl]);

    return (
        <div>
            {temps.map((item, index) => (
                <TempInfo id = {index} temp = {item}
                time = {times[index]}/>
            ))}
        </div>
    );
};

export default Fetch;
