
import moment from 'moment';
import './WeatherCard.css';
import { Button } from 'semantic-ui-react';
// import { RiCloseCircleLine } from 'react-icons/ri';

function WeatherCard ({weatherData, closeCurrentLocationCard}){

    const icon = weatherData.weather[0].icon;
    
    const refresh = () => {
        window.location.reload();
    }

    return (
        <div className="main">
            <div className="top">
                <p className="header">{weatherData.name}</p>
                {/* <RiCloseCircleLine/> */}
                <button type="button" class="close-current-location-btn" onClick={closeCurrentLocationCard}>Close</button> 
                <Button className="refresh-button" inverted color='black' circular icon='refresh' onClick={refresh} />
            </div>

            <div className="flex">
                <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
                <p className="description">{weatherData.weather[0].main}</p>
                <img src={`http://openweathermap.org/img/w/${icon}.png`} alt='weather-icon'/>
            </div>

            <div className="flex">
                <p className="temp">Temprature: {weatherData.main.temp} &deg;C</p>
                <p className="temp">Humidity: {weatherData.main.humidity} %</p>
            </div>

            <div className="flex">
                <p className="sunrise-sunset">Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                <p className="sunrise-sunset">Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
            </div>
        </div>
    )
}

export default WeatherCard;