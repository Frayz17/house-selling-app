import React from 'react'
import PropTypes from 'prop-types'

export default function Room ({ room, handlerRoomsSelection }) {
  const roomsLabelString = (amount) => {
    switch (amount) {
      case 'all':
        return 'все'
      case 1:
        return (amount + ' комната')
      default:
        return (amount + ' комнаты')
    }
  }

  return (
    <div>
      <label>
        <input type='checkbox'
          name='rooms'
          value={room.amount}
          onChange={handlerRoomsSelection(room.id)}
          checked={room.selected}
        />
        {roomsLabelString(room.amount)}
      </label>
    </div>
  )
}

Room.propTypes = {
  room: PropTypes.object.isRequired,
  handlerRoomsSelection: PropTypes.func.isRequired
}
