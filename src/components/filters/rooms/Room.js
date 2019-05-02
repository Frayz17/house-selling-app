import React from 'react'
import PropTypes from 'prop-types'

export default function Room ({ room, handlerRoomsSelection }) {
  const roomsLabelString = (numberOfRooms) => {
    switch (numberOfRooms) {
      case 'all':
        return 'все'
      case 1:
        return (numberOfRooms + ' комната')
      default:
        return (numberOfRooms + ' комнаты')
    }
  }

  return (
    <div>
      <label>
        <input type='checkbox'
          name='rooms'
          value={room.numberOfRooms}
          onChange={handlerRoomsSelection(room.id)}
          checked={room.selected}
        />
        {roomsLabelString(room.numberOfRooms)}
      </label>
    </div>
  )
}

Room.propTypes = {
  room: PropTypes.object.isRequired,
  handlerRoomsSelection: PropTypes.func.isRequired
}
