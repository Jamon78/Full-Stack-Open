import { useState, useEffect } from 'react'
import axios from 'axios'
import CountryList from './CountryList'

function App() {

  const handleNewFilter = (event) => setNameFilter(event.target.value.toLowerCase())
  const [countryData, setCountryData] = useState([])
  const [nameFilter, setNameFilter] = useState()

  useEffect(() => {
    axios
    .get('https://studies.cs.helsinki.fi/restcountries/api/all')
    .then(response => {
      const allData = response.data
      setCountryData(allData)
    })
  }, [])

  return (
    <>
      <div>find countries <input onChange={handleNewFilter}></input></div>
      <CountryList countryData={countryData}  nameFilter={nameFilter} />
    </>
  )
}

export default App
