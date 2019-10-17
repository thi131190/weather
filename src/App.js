import React, { useState, useEffect } from 'react'
import { ClipLoader } from 'react-spinners'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

export default function App () {
  const [weather, setWeather] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const getData = async (lon, lat) => {
    const ID = '3241bba7e29855049993450681beda4b'
    const URL = `https://api.openweathermap.org/data/2.5/weather?APPID=${ID}&lon=${lon}&lat=${lat}`
    const RES = await fetch(URL)
    const DATA = await RES.json()
    // console.log(DATA)
    setWeather(DATA)
    setIsLoading(false)
  }
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(pos => {
      getData(pos.coords.longitude, pos.coords.latitude)
    })
  }

  useEffect(() => {
    getLocation()
  }, [])

  if (isLoading) {
    return (
      <div
        className='d-flex justify-content-center align-items-center'
        style={{ height: '100vh' }}
      >
        <ClipLoader
          sizeUnit={'px'}
          size={150}
          color={'#123abc'}
          loading={isLoading}
        />
      </div>
    )
  }

  return (
    <div className='container-fluid text-white my-auto'>
      <div className='container mx-auto my-4 py-4'>
        <div className='row justify-content-center text-center'>
          <h1 className='col-12 display-4 my-2 py-3 text-success'>
            Awesome Weather App
          </h1>
          <h2 className='col-12'>
            {weather && weather.name}
          </h2>
          <h3 className='col-12 text-danger'>
            {weather && weather.main.temp}
          </h3>
          <h3 className='col-12'>
            <img
              src={`http://openweathermap.org/img/w/${weather &&
                weather.weather[0].icon}.png`}
              alt=''
            />
            {weather && weather.weather[0].description}
          </h3>
        </div>
      </div>
    </div>
  )
}
