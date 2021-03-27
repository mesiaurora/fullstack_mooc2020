import React from 'react'

const Search = (props) => {

  return (
    <div>
      Filter with:
      <input value={props.filter} onChange={props.method}/>
    </div>
  )
}

export default Search
