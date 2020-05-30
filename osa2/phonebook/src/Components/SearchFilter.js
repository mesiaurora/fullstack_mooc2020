import React from 'react'

const SearchFilter = (props) => {
  const searchFilter = props.searchFilter
  const method = props.method

  return (
    <div>
      Filter with:
      <input value={searchFilter} onChange={method}/>
    </div>
  )
}

export default SearchFilter
