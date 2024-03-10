import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const TempInfo = ({id, time, temp}) => {
    return (
        <div class="row align-items-center">
            <div class="col">
                {time}
            </div>
            <div class="col">
                {temp}
            </div>
        </div>
    );
};
export default TempInfo;