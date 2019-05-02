import React from 'react'
import Room from './Room'

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
