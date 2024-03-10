import './App.css';
import Fetch from './components/Fetch'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  // let apiUrl = "https://api.open-meteo.com/v1/forecast?temperature_unit=fahrenheit"
  // const getLatLong = (cityName) => {
    
  // }

  return (
    <div class="container">
      
      <div class="row align-items-center cities">
        <div class="col">
          <button type="button" class="but">
            Austin
          </button>
        </div>
        <div class="col">
          <button type="button" class="but">
            Dallas
          </button>
        </div>
        <div class="col">
          <button type="button" class="but">
            Houston
          </button>
        </div>
      </div>

      <div class="row align-items-center text-input">
        <div class="col-9 text-center">
          <input name="cityInput" class="input"/>
        </div>
        <div class="col">
          <button type="button" class="but">
            +
          </button>
        </div>
      </div>

      <div class="row align-items-center forecast">
        <div class="row align-items-center">
              <div class="col">
                  <b>Time</b>
              </div>
              <div class="col">
                  <b>Temperature</b>
              </div>
          </div>
        <Fetch cityName="Austin"/>
      </div>

    </div>
  );
}
export default App;