import logo from './logo.svg';
import React, {useState} from 'react';


function App() {

  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState('cold');

  const increaseTemperature = () => {
    let newTemperature = temperatureValue + 1;
    if (newTemperature >= 15) {
      setTemperatureColor('hot')
    }

    setTemperatureValue(newTemperature)
  }

  const decreaseTemperature = () => {
    let newTemperature = temperatureValue - 1;
    if (newTemperature < 15) {
      setTemperatureColor('cold')
    }

    setTemperatureValue(newTemperature)
  }


  return (
    <div className='app-container'>
      <div className='temperature-display-container'>
        <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°C</div>
      </div>
      <div className='button-container'>
        <button onClick={() => increaseTemperature()}  className='button'>+</button>
        <button onClick={() => decreaseTemperature()}  className='button'>-</button>

      </div>
    </div>
  );
}

export default App;
