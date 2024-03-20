import {useEffect, useState} from 'react'
import Country from "./Country"

function CountryList({countryData, nameFilter}) {

  const [selectedCountry, setSelectedCountry] = useState(null)

  const filteredCountries = nameFilter ? countryData.filter(country => country.name.common.toLowerCase().includes(nameFilter)) : []

  const handleClickShow = (country) => {
    setSelectedCountry(country)
  }

  useEffect(() => {
    if (!nameFilter) {
      setSelectedCountry(null)
    }
  }, [nameFilter])

  if (filteredCountries.length > 10)  {
    return <p>Too many matches, specify another filter</p>
  } else if (filteredCountries.length === 1) {
    return <Country country={filteredCountries[0]}/>
  } else {
    return (
      <div>
        {filteredCountries.map(country =>
          <div key={country.name.common}>
            <p>{country.name.common} <button onClick={() => handleClickShow(country)}>show</button></p>
          </div>
          )}
          {selectedCountry && <Country country={selectedCountry}/>}
      </div>
    )
  }
}
export default CountryList