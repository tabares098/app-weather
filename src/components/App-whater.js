import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";





const Weater = () => {
    const[ weather, setWeather] = useState({})
    const [temps, setTemps] = useState("");
    const [isDc, setIsDc] = useState(true);
    
    
       /* const latitude = pos.coords.latitude;
        const longitude = pos.coords.longitude;


        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=fc041b3e762b7d86aaa5cb21d4ec3b69${temps}`)
       .then(res => setWeather(res.data),
       //setTemp(weather.main?.temp)
        
       );*/
       
    
      
    useEffect(() => {
      
        navigator.geolocation.getCurrentPosition((position) =>{
           axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=fc041b3e762b7d86aaa5cb21d4ec3b69${temps}`)
       .then(res => setWeather(res.data)
        )})

       

      
      //navigator.geolocation.getCurrentPosition(succes);
    },[temps]);
    
    const convertTemp = () => {
        if (isDc) {
         /* setTemp((temp - 32)/1,8);*/
         setTemps("&units=metric")
          setIsDc(false);
        }else {
          /*setTemp((temp * 1,8) + 32);*/
          setTemps("")
          setIsDc(true);
      };
    }
    
    
    return (
        <div className="card">

            <h1>Weather App</h1>
           
           <ul>
                <div className="country">
                      <li>{weather.name}-</li><br />
                      <li>{weather.sys?.country}</li>
                </div>
                 <div className="temp">
                     {weather.weather?<img src={`https://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`} alt="" />:null}
                      <li> {weather.main?.temp} {isDc ? "°F" : "°C"}{" "}</li> 
                      
                      
                 </div>
                 <div className="sumits"> <br />
                      <br />
                      <li><b>Clouds:<br />  </b>{weather.weather?.[0].description}</li> 
                      <li><b>Humidity:<br /></b>{weather.main?.humidity}%</li>
                      <li><b>Wind Speed:<br /></b>{weather.wind?.speed}m/s</li>

                 </div>
                 
                </ul>
               
                <button onClick={convertTemp}>
          Convert to {isDc ? "°C" : "°F"}
        </button>

        </div>
    );
};

export default Weater;
               
               
               
               
                
                
               
               
                
                
            

    
           /* 
            <li><b></b>{weather.main?.temp}°C</li> <br /> 

             
        
    */
   
    