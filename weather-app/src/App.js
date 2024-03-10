import './App.css';
import Fetch from './components/Fetch'
import { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// async function getLatLong(cityName) {
//   try {
//       const response = await fetch('https://geocoding-api.open-meteo.com/v1/search?name=' + cityName + '&count=1&language=en&format=json');
//       const json = await response.json();
//       console.log(json); 
//       return json;
//   }
//   catch (e) {
//       console.log("Error: " + e)
//       return {};
//   }
// }

// async function asyncCaller(cityName) {
//   const result = await getLatLong(cityName);
//   return result;
// }

const initialCities = [
  {
    id:1,
    name:"Austin",
    latitude: 30.26715,
    longitude: -97.74306,
  },
  {
    id:2,
    name:"Dallas",
    latitude: 32.78306,
    longitude: -96.80667,
  },
  {
    id:3,
    name:"Houston",
    latitude: 29.76328,
    longitude: -95.36327,
  }
]

function App() {
  // const result = asyncCaller("Austin");
  const [coords, setCoords] = useState({"latitude": initialCities[0].latitude,
  "longitude": initialCities[0].longitude});

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
  
    const formJson = Object.fromEntries(formData.entries());
    setCoords({"latitude": formJson["latInput"],
    "longitude": formJson["longInput"]})
  }

  return (
    <div class="container">
      
      <div class="row align-items-center cities">
        <div class="col">
          <button type="button" class="but" onClick={() => {
            setCoords({"latitude": initialCities[0].latitude,
            "longitude": initialCities[0].longitude})
          }}>
            Austin
          </button>
        </div>
        <div class="col">
          <button type="button" class="but" onClick={() => {
            setCoords({"latitude": initialCities[1].latitude,
            "longitude": initialCities[1].longitude})
          }}>
            Dallas
          </button>
        </div>
        <div class="col">
          <button type="button" class="but" onClick={() => {
            setCoords({"latitude": initialCities[2].latitude,
            "longitude": initialCities[2].longitude})
          }}>
            Houston
          </button>
        </div>
      </div>

      <form method="post" class="row align-items-center text-input" onSubmit={handleSubmit}>
        <div class="col-4 text-center">
          <input name="latInput" class="input" defaultValue="0"/>
        </div>
        <div class="col-4 text-center">
          <input name="longInput" class="input" defaultValue="0"/>
        </div>
        <div class="col">
          <button type="submit" class="but">
            +
          </button>
        </div>
      </form>

      <div class="row align-items-center forecast">
        <div class="row align-items-center">
              <div class="col">
                  <b>Time</b>
              </div>
              <div class="col">
                  <b>Temperature</b>
              </div>
          </div>
        <Fetch lat={coords["latitude"]} long={coords["longitude"]}/>
      </div>

    </div>
  );
}
export default App;