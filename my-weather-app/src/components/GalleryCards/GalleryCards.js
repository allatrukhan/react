import WeatherCard from "../WeatherCard/WeatherCard";
import { useState, useEffect } from "react";

function GalleryCards({str, lat, long}){
    
    const [data, setData]=useState(null);
    const [isOpen, setIsOpen] = useState(true);

    const [gallery, setGallery]=useState({
        data,
        isOpen
    });


    useEffect(()=>{
        if(str){
            fetchData('search');
            setIsOpen(true);
        }
    },[str])

    useEffect(()=>{
        if(lat&&long){
            fetchData('current');
            setIsOpen(true);
        }
    },[lat, long])
    
    const closeCurrentLocationCard=()=>{
        setIsOpen(false);
    };

    const fetchData = async (forecast=[]) => {
        try {
            switch (forecast) {
            case 'current':
                return await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
                        .then(res => res.json())
                        .then(result => {
                          setData(result)
                        });
            case 'search':
                return await fetch(`${process.env.REACT_APP_API_URL}/weather/?q=${str}&&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
                    .then((response) => {
                        return response.json()
                    })
                    .then((json) => {
                        setData(json)
                    })
            default:
                return 'Try one more';
            }
        } catch (err) {
            throw err;
        } 
    }

return(
    <div>
        {(data&&isOpen)?<WeatherCard weatherData={data} closeCurrentLocationCard={closeCurrentLocationCard}/>:<h1>ERROR</h1>}
    {/* {data===[])?<WeatherCard weatherData={data}/>:<p>gvfmjgvj</p>}
       {(typeof data.main != 'undefined') ? (
       <WeatherCard weatherData={data} closeCurrentLocationCard={closeCurrentLocationCard}/>
  ): (
    <div></div>
  )}     */}
    </div> 
)
  }
export default GalleryCards;
