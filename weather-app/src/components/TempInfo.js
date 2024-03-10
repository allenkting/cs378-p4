import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const TempInfo = ({id, time, temp}) => {
    let date = new Date(time); 

    return (
        <div class="row align-items-center">
            <div class="col">
                {date.toDateString()}, {date.toLocaleTimeString('en',
                 { timeStyle: 'short', hour12: true})}
            </div>
            <div class="col">
                {Number(temp).toFixed(1)} °F
            </div>
        </div>
    );
};
export default TempInfo;