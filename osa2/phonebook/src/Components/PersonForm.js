import React, { useState } from 'react'



const PersonForm = (props) => {

  const persons = props.persons
  const [newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')

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

  return (
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
  )
}

export default PersonForm
