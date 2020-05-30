import React from 'react'
import Person from './Person'

const Persons = (props) => {
  const persons = props.persons

  return (
    <ul>
      {persons.map((person) =>
        <Person key={person.name} person={person}/>
      )}
    </ul>
  )
}

export default Persons
