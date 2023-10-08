import React, { useState, useEffect } from 'react';
import sunny from '../images/sunny.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

const Weather = () => {
  const url = 'https://api.openweathermap.org/data/2.5/';
  const key = 'b69316719edbf27dcc6092cdb77f2bc6';
  const [search, setSearch] = useState('addis ababa');
  const [result, setResult] = useState(null);

  const searchPressed = () => {
    fetch(`${url}weather?q=${search}&units=metric&APPID=${key}`)
      .then((res) => res.json())
      .then((res) => setResult(res));
  };

  useEffect(() => {
    fetch(`${url}weather?q=${search}&units=metric&APPID=${key}`)
      .then((res) => res.json())
      .then((res) => setResult(res));
  }, []);

  console.log(result);

  return (
    <div className="container-fluid" style={{ backgroundColor: 'blue', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="col-12 text-center">
        <h1 style={{ color: 'white' }}>Current Weather</h1>

        {result && <h1 style={{ color: 'white' }}>{result.name} {result.sys.country}</h1>}

        <div className="d-flex align-items-center justify-content-center">
          <input type="text" placeholder="addis ababa" onChange={(e) => setSearch(e.target.value)} className="form-control w-50 mr-2" style={{ maxWidth: '300px' }} />
          <button onClick={searchPressed} className="btn btn-primary">Search</button>
        </div>

        {result && (
          <div style={{ color: 'white' }}>
            <p>
              {result.name}, {result.sys.country}
            </p>
            <div className="d-flex align-items-center justify-content-center">
              <img src={sunny} alt="Sunny" className="mr-2" />
              <p>{result.main.temp}°C</p>
            </div>
            <h3>Humidity: {result.main.humidity}</h3>
            <p>Condition: {result.weather[0].description}</p>
          <p>dev by muluken1393@gmail.com</p></div>
        )}
      </div>
    </div>
  );
};

export default Weather;