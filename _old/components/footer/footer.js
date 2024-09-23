import { useEffect, useState } from 'react';
import styled from 'styled-components';

export const FooterContainer = ({ className }) => {
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState('');
  const [weather, setWeather] = useState('');

  useEffect(() => {
    fetch(
      'http://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&lang=ru&APPID=081413ebf58d106f3d021b4600f50152',
    )
      .then((res) => res.json())
      .then(({ name, main, weather }) => {
        setCity(name);
        setTemperature(Math.round(main.temp));
        setWeather(weather[0].description);
      });
  }, []);

  return (
    <div className={className}>
      <div>
        <div>Блог веб-разработчика</div>
        <div>web@developer.ru</div>
      </div>
      <div>
        <div>
          {city}, {new Date().toLocaleDateString('ru', { day: 'numeric', month: 'long' })}
        </div>
        <div>
          {temperature} градусов {weather}
        </div>
      </div>
    </div>
  );
};

export const Footer = styled(FooterContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  padding: 20px 40px;
  box-shadow: 0 2px 10px #000;
  background-color: #fff;
  font-weight: bold;
`;
