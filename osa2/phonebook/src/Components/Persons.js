import React from 'react'

const Persons = (props) => {
  const persons = props.persons

  return (
    <p><Person name={name} number={number} /></p>


    <ul>
      {showFilteredPersons.map((person) =>
        <Person key={person.name} person={person}/>
      )}
    </ul>
  )
}

export default Persons
