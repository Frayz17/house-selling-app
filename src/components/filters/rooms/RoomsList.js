import React from 'react'
import Room from './Room'
import PropTypes from 'prop-types'

export default function RoomsFilter ({ rooms, handlerRoomsSelection }) {
  return (
    <fieldset>
      <legend>Количество комнат</legend>
      {rooms.map(room => (
        <Room
          key={room.id}
          room={room}
          handlerRoomsSelection={handlerRoomsSelection}
        />
      ))}
    </fieldset>
  )
}

RoomsFilter.propTypes = {
  rooms: PropTypes.array.isRequired,
  handlerRoomsSelection: PropTypes.func.isRequired
}
