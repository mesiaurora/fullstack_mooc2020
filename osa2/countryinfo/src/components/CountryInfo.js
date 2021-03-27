import React from 'react'
import Weather from './Weather'

const Language = (props) => {
  return (
    <li>{props.name}</li>
  )
}

// Represents a single country info
const CountryInfo = (props) => {
  const name = props.name
  const languages = props.languages
  const capital = props.capital
  const population = props.population
  const flagLocation = props.flag

  return (
    <div>
      <h3>{name}</h3>
      <b>Capital:</b> {capital} <br />
      <b>Population:</b> {population}<br />
      <b>Languages:</b>
      <ul>
        {languages.map((language, i) =>
          <Language key={i} name={language.name} />
        )}
      </ul>
      <img src={flagLocation} alt="Flag" width="100px" height="100px" />
      <h3>Weather in {capital}</h3>
      <Weather capital={capital} />
    </div>
  )
}

export default CountryInfo
