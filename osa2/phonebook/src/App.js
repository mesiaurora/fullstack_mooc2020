import React, { useState } from 'react'
import Person from './Components/Person'

const App = (props) => {

  const containsAlert = ' is already added. Name needs to be unique'
  const pageHeader = 'Phonebook'
  const searchHeader = 'Search'
  const addHeader = 'Add a new person'
  const numbersHeader = 'Numbers'

  const [persons, setPersons] = useState(props.persons)
  const [newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchFilter, setSearchFilter] = useState('')

  const addNewPerson = (event) => {
    event.preventDefault()

    const personObj = {
      name: newName,
      number: newNumber,
    }

    if (!persons.some(e => e.name === newName)){
      setPersons(persons.concat(personObj))
    } else {
      const alert = newName + containsAlert
      window.alert(alert)
    }

    setNewName('')
    setNewNumber('')
  }

  const handleNameFieldChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberFieldChange = (event) => {
    setNewNumber(event.target.value)
  }

  const filterNumbers = (event) => {
    setSearchFilter(event.target.value)
  }

  const showFilteredPersons = persons.filter(person => person.name.toLowerCase().includes(searchFilter.toLowerCase()))

  return (
    <div>
      <h1>{pageHeader}</h1>
      <h2>{searchHeader}</h2>
        <div>
          Filter with:
          <input value={searchFilter} onChange={e => setSearchFilter(e.target.value)}/>
        </div>
      <h2>{addHeader}</h2>
      <form onSubmit={addNewPerson}>
        <div>
          Name: <input value={newName} onChange={handleNameFieldChange}/>
        </div>
        <div>
          Number: <input value={newNumber} onChange={handleNumberFieldChange}/>
        </div>
        <div>
          <button type="submit" >Add</button>
        </div>
      </form>
      <h2>{numbersHeader}</h2>
      <ul>
        {showFilteredPersons.map((person) =>
          <Person key={person.name} person={person}/>
        )}
      </ul>
    </div>
  )

}

export default App
