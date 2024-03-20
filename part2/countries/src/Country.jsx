import axios from 'axios'
import {useState, useEffect} from 'react'

function Country({country}) {
  const api_key = import.meta.env.VITE_OPEN_WEATHER_API_KEY

  const [weatherData, setWeatherData] = useState(null)

  useEffect (() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${api_key}&units=metric`)
      .then(response => {
        setWeatherData(response.data)
      })
  },[country])

  if (!weatherData) {
    return (
      <div>
        <h1>{country.name.common}</h1>
        <p>capital {country.capital}</p>
        <p>area {country.area}</p>
        <h3>languages</h3>
        <ul>
          {Object.values(country.languages).map(lang => <li key={lang}>{lang}</li>)}
        </ul>
        <img src={country.flags.png} alt={`flag of ${country.name.common}`} />
        <br />
        <p>Weather conditions not available, please try again later.</p>
      </div>
    )
  }

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      <h3>languages</h3>
      <ul>
        {Object.values(country.languages).map(lang => <li key={lang}>{lang}</li>)}
      </ul>
      <img src={country.flags.png} alt={`flag of ${country.name.common}`} />
      <h2>Weather in {weatherData.name}</h2>
      <p>temperature {weatherData.main.temp} Celcius</p>
      <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png" alt="weather condition image`} alt='weather condition'/>
      <p>wind {weatherData.wind.speed} m/s</p>
    </div>
  )
}
export default Country