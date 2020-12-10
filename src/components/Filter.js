import React from 'react'
import PropTypes from 'prop-types' // updated way since React v15.5

export function Filter({ setFilter, filter }) {
  return (
      <label htmlFor="input-name">Filter: <input onChange={(e) => setFilter(e.target.value) } value={filter} /></label>
  )
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired
}