import { useState, useEffect } from "react";
import Image from "../Image/Image";
import './Gallery.css';

const API_KEY = '38369947-a9e98c07939d5975c63db591e';
const BASE_URL = `https://pixabay.com/api/?key=${API_KEY}`;

function Gallery({str}) {
    
  const [data, setData]=useState([]);

     useEffect (()=> {
      if (str!==""){
         fetch(`${BASE_URL}&q=${str}`)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          setData(json);
        })
      }
   
    }, [str])
      
    return (
      <div class="gallery-wrapper">
        <h1>{str}</h1>
        <div class="gallery-container">
        {(data.hits)&&
          (data.hits.map((el)=>
            <Image img={el.previewURL} alt={el.tags} />
          ))}
        {/* <pre>{JSON.stringify(data), null, 2)}</pre> */}
        {/* {img} */}
        </div>
      </div>
      )
    }  
  export default Gallery;