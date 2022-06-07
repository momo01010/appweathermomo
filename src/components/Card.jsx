import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Card = ({lat, lon}) => {

    const [obj, setObj] = useState({})
    const [tempF, setTempF] = useState(true)

    const API_KEY = 'd09c8cd08c3ebc07e16f93fb39eef7c1'

    useEffect(()=>{

        if(lat !== undefined){
          axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
          .then((res)=> {
            setObj(res.data)
          })
          .catch((err)=>{
            console.log(err)
          })
        }
    }, [lat])

    const handleTemp = () => {
       setTempF(!tempF)
    }



  return (
    
    <div className="container">
      <div className="location-bar">
        <div className="location">
          <h3 className='city'>{obj.name}</h3>
          <h4>{obj.sys?.country}</h4>
        </div>
        <div className='temp'>
          <h1>{tempF ? 
          `${((obj.main?.temp) - 273.15).toFixed(1)} °C` : 
          `${(((obj.main?.temp) - 273.15) * 9/5 + 32).toFixed(1)} °F`
        }
          </h1>
          <img src={`http://openweathermap.org/img/wn/${obj.weather?.[0].icon}.png`} alt="" />
          <h2>{obj.weather?.[0].main}</h2>
          <button className='btn' onClick={handleTemp}>{tempF ? 'or °F' : 'or °C'}</button>
        </div>
      </div>
      <div className='weather-bar'>
        <div className="feels-like">
          <h3>Feels-Like</h3>
          <h3>{tempF ? 
          `${((obj.main?.feels_like) - 273.15).toFixed(1)} °C` : 
          `${(((obj.main?.feels_like) - 273.15) * 9/5 + 32).toFixed(1)} °F`
        }
          </h3>
        </div>
        <div className="humidity">
          <h3>Humidity</h3>
          <h3>{obj.main?.humidity} %</h3>
        </div>
        <div className="wind">
          <h3>Wind</h3>
          <h3>{obj.wind?.speed} mps</h3>
        </div>
      </div>
    </div>

  )
}

export default Card