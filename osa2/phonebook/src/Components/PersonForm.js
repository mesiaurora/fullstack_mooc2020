import React from 'react'

const PersonForm = (props) => {

  const newNumber = props.newNumber
  const newName = props.newName

  return (
    <form onSubmit={props.addNewPerson}>
      <div>
        Name: <input value={newName} onChange={props.newNameMethod}/>
      </div>
      <div>
        Number: <input value={newNumber} onChange={props.newNumberMethod}/>
      </div>
      <div>
        <button type="submit" >Add</button>
      </div>
    </form>
  )
}

export default PersonForm
