 import "./WeatherApp.css"
 import clear_icon from "../../assets/clear.png"
 import search_icon from "../../assets/search.png"
 import cloud_icon from "../../assets/cloud.png"
 import drizzle_icon from "../../assets/drizzle.png"
 import humidity_icon from "../../assets/humidity.png"
 import snow_icon from "../../assets/snow.png"
 import wind_icon from "../../assets/wind.png"
 import rain_icon from "../../assets/rain.png"
 import axios from 'axios'
import { useState } from "react"

 
export const WeatherApp = ()=>{
    const [inputCity , setinputCity] = useState("")
    
    const [wicon,setWicon] = useState(cloud_icon);
    const [city,setCity] = useState("");
    const [humidity,setHumidity] = useState("");
    const [wind,setWind] = useState("");
    const [temp,setTemp] = useState("");
    


 const search = async()=>{

    if(inputCity===""){
        return 0;
    }
    

    const response =  await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=Metric&appid=7b2e4b1677bea981941226f19085b930`);

   
    setCity(response.data.name);
    setHumidity(response.data.main.humidity)
    setWind(Math.floor(response.data.wind.speed))
    setTemp(Math.floor(response.data.main.temp))

   

    if(response.data.weather[0].icon==="01d" ||response.data.weather[0].icon==="01n" ){
        setWicon(clear_icon);
    }

    else if(response.data.weather[0].icon==="02d" ||response.data.weather[0].icon==="02n" ){
        setWicon(cloud_icon);
    }

    else if(response.data.weather[0].icon ==="03d" ||response.data.weather[0].icon==="03n" ){
        setWicon(drizzle_icon);
    }

    else if(response.data.weather[0].icon==="04d" ||response.data.weather[0].icon==="04n" ){
        setWicon(drizzle_icon);
    }

    else if(response.data.weather[0].icon==="09d" ||response.data.weather[0].icon==="09n" ){
        setWicon(rain_icon);
    }

    else if(response.data.weather[0].icon==="10d" ||response.data.weather[0].icon==="10n" ){
        setWicon(rain_icon);
    }

    else if(response.data.weather[0].icon==="13d" ||response.data.weather[0].icon==="13n" ){
        setWicon(snow_icon);
    }
    else{
        setWicon(clear_icon);
    }



}
    return <div >
        <div className="container">
            <div className="topbar">
                <input type="text" className="cityInput" placeholder="Search City" onChange={(e)=>{setinputCity(e.target.value)}} />
            
            <div className="search-icon" onClick={search} onChange={(e)=>{
                setCity(e.target.value)
                setWind(e.target.value)
                setHumidity(e.target.value)
                setTemp(e.target.value)

            }}>
            
                <img src={search_icon} alt="" />
            </div>
            </div>
            <div className="weather-image">
                <img src={wicon} alt="" />
                <div className="weather-temp">{temp}°c</div>
            </div>
            <div className="weather-location">{city}</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" />
                    <div className="data">
                        <div className="humidity-percent" >{humidity} %</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>

                <div className="element">
                    <img src={wind_icon} alt="" />
                    <div className="data">
                        <div className="wind-speed">{wind} km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>

 }


