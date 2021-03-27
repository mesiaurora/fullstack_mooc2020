import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

const Weather = (props) => {
  const city = props.capital
  const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY
  const temperature = ''
  const wind = ''
  const weatherImgLocation = ''

  const [weather, setWeather] = useState([])

  // Get weather for capital in JSON format
  let config = {
    params: {
      access_key: weatherApiKey,
      query: city
    },
  }

  useEffect(() => {
      axios
        .get('http://api.weatherstack.com/current', config)
        .then(response => {
          console.log('promise fulfilled')
          setWeather(response.data)
          console.log(weather.current )
        })
    }, [])

    // axios.get()
  console.log(weather.current)

  return (
    <div>
      <b>Temperature: </b>

    </div>
  )
}

export default Weather
