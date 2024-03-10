import '../App.css';
import { useState, useEffect } from 'react';
import TempInfo from './TempInfo';


const Fetch = ({lat, long}) => {

    let tempUrl = "https://api.open-meteo.com/v1/forecast?temperature_unit=fahrenheit" + 
                    "&latitude=" + lat + "&longitude=" + long + "&hourly=temperature_2m"
    const [temps, setTemps] = useState([]);
    const [times, setTimes] = useState([]);

    useEffect(() => {
        fetch(tempUrl)
        .then((res) => {return res.json()})
        .then((data) => {
            console.log(data);
            setTemps(data.hourly.temperature_2m.reverse());
            setTimes(data.hourly.time.reverse());
        })
        .catch((error) => {
            alert("Could not find weather for those coordinates")
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
