import './App.css';
// import WeekContainer from './WeekContainer/WeekContainer';
import React, { useState } from "react";
import Search from './components/Search/Search';
import CurrentLocationWeather from './components/CurrentLocationWeather/CurrentLocationWeather';
import GalleryCards from './components/GalleryCards/GalleryCards';

function App() {
  const [searchStr, setSearchStr]=useState('');
  const [currentLat, setCurrentLat]=useState(null);
  const [currentLong, setCurrentLong]=useState(null);
  
  function currentLatitude(lat){
    setCurrentLat(lat);
  }
  
  function currentLongitude(long){
    setCurrentLong(long);
  }

  function onSearchClick(str){
    setSearchStr(str);
  }
  
  return (
    <div className="App">
      <CurrentLocationWeather lat={currentLatitude} long={currentLongitude}/>
      <div class="content">
        <Search onClick={onSearchClick}/>
        <GalleryCards str={searchStr} lat={currentLat} long={currentLong}/>
      </div>
    </div>
  );
}

export default App;
