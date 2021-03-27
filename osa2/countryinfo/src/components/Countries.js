import React from 'react'
import CountryInfo from './CountryInfo'

const Countries = (props) => {

  const countries = props.countries


  let countryResult;

  const createCountryInfo = (country) => {
    countryResult = <CountryInfo name={country.name} population={country.population}
                        languages={country.languages} capital={country.capital}
                        flag={country.flag}/>
  }

  if (countries.length === 1) {
    createCountryInfo(countries[0])
  } else {
    countryResult =
    <ul>
      {countries.map((country, i) =>

        <li key={i}>{country.name}
        <button onClick={e => createCountryInfo(e.target.value)}>
          Show
        </button>
        </li>
      )}
    </ul>
  }



  return (
    <div>
      {countryResult}
    </div>

  )
}

export default Countries
