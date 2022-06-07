
import { useEffect, useState } from 'react';
import './App.css'
import Card from './components/Card';
import Loader from './components/Loader/Loader';


function App() {

  const [lon, setLon] = useState(0)
  const [lat, setLat] = useState(0)

  useEffect(()=> {
    navigator.geolocation.getCurrentPosition(position)
   }, [])
 

  const position = (pos) => {
    setLat(pos.coords.latitude)
    setLon(pos.coords.longitude)
  }


  return (
    <>
    <div className="App">
    { lat !== 0 ? <Card lat={lat} lon={lon}/> : <Loader/>}
    
    </div>
    </>
  
)}

export default App
