import React from 'react'
import PropTypes from 'prop-types'

export default function RatingFilter () {
  return (
    <div>
      <span class='fa fa-star checked' />
      <span class='fa fa-star checked' />
      <span class='fa fa-star checked' />
      <span class='fa fa-star' />
      <span class='fa fa-star' />
    </div>
  )
}

RatingFilter.propTypes = {
  room: PropTypes.object.isRequired,
  handlerRoomsSelection: PropTypes.func.isRequired
}
