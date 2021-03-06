import React, { useState, useEffect } from 'react'
import Person from './Components/Person'
import Persons from './Components/Persons'
import PersonForm from './Components/PersonForm'
import SearchFilter from './Components/SearchFilter'
import axios from 'axios'

const App = () => {
  const pageHeader = 'Phonebook'
  const searchHeader = 'Search'
  const addHeader = 'Add a new person'
  const numbersHeader = 'Numbers'
  const containsAlert = ' is already added. Name needs to be unique'

  const [searchFilter, setSearchFilter] = useState('')
  const [persons, setPersons] = useState([])
  const [newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  const showFilteredPersons = persons.filter(person => person.name.toLowerCase().includes(searchFilter.toLowerCase()))

  const addNewPerson = (event) => {
    event.preventDefault()

    const newPerson = {
      name: newName,
      number: newNumber,
    }

    if (!persons.some(e => e.name.toLowerCase() === newName.toLowerCase())){
      setPersons(persons.concat(newPerson))
    } else {
      const alert = newName + containsAlert
      window.alert(alert)
    }

    setNewName('')
    setNewNumber('')
  }


  return (
    <div>
      <h1>{pageHeader}</h1>
      <h2>{searchHeader}</h2>
        <SearchFilter searchFilter={searchFilter} method={e => setSearchFilter(e.target.value)}/>
      <h2>{addHeader}</h2>
        <PersonForm persons={persons}
            newNameMethod={e => setNewName(e.target.value)} newNumberMethod={e => setNewNumber(e.target.value)}
            newName={newName} newNumber={newNumber} addNewPerson={addNewPerson}/>
      <h2>{numbersHeader}</h2>
        <Persons persons={showFilteredPersons} filter={searchFilter}/>
    </div>
  )

}

export default App
