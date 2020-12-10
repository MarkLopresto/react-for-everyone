import React from 'react'
import PropTypes from 'prop-types'

export function Movie({ movie }) {

  return (
    <div>
      <li>{movie.title}</li>
    </div>
  )
}

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
}