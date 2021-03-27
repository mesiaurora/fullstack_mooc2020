import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'
import Search from './components/Search'

const App = () => {
  const pageHeader = 'Country Info'
  const filterHeader = 'Find countries'
  const countriesHeader = 'Countries'
  const tooMany = 'Too many results, please filter more.'

  const [countries, setCountries] = useState([])
  const [searchFilter, setSearchFilter] = useState('')
  const [currentWeather, setCurrentWeather] = useState([])



  // Get all countries in JSON format and store in usestate
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])

  // Filter countries according to the filter
  const filteredCountries = countries.filter(country =>
                                              country.name.toLowerCase()
                                              .includes(searchFilter.toLowerCase()))

  // Determine what information to show
  let countryContent;

  if (filteredCountries.length >= 10) {
    countryContent = <p>{tooMany}</p>
  }
  else
  {
    countryContent = <Countries countries={filteredCountries}/>
  }

  return (
    <div>
      <h1>{pageHeader}</h1>
      <h2>{filterHeader}</h2>
        <Search searchFilter={searchFilter} method={e => setSearchFilter(e.target.value)}/>
      <h2>{countriesHeader}</h2>
        {countryContent}
    </div>
  )

}

export default App
