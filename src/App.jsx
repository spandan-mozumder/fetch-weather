import { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';

function App() {
  const [weatherinfo, setweatherinfo] = useState({
    city: '',
    temp: 0,
    tempMin: 0,
    tempMax: 0,
    humidity: 0,
    feelsLike: 0,
    weather: ''
  });
  let updateinfo = (newinfo) => {
    setweatherinfo(newinfo);
  };
  return (
    <>
      <SearchBox updateinfo={updateinfo} /><br />
      <InfoBox info={weatherinfo} />
    </>
  );
}

export default App
