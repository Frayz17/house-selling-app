import React, { useState } from 'react'
import Rate from 'rc-rate'
import CurrencyList from './filters/currencies/CurrencyList'
import RoomsList from './filters/rooms/RoomsList'
import PriceFilter from './filters/PriceFilter'
import RatingFilter from './filters/rating/RatingFilter'

import styled from 'styled-components'

export default function HousesFilter () {
  const [currencies, setCurrencies] = useState({
    currencyList: [
      'uah',
      'usd',
      'eur'
    ],
    currencySelected: 'uah'
  })

  const [rooms, setRooms] = useState([
    { id: '1', numberOfRooms: 'all', selected: true },
    { id: '2', numberOfRooms: 1, selected: false },
    { id: '3', numberOfRooms: 2, selected: false },
    { id: '4', numberOfRooms: 3, selected: false }
  ])

  const [price, setPrice] = useState({
    start: 0,
    end: 100000
  })

  const [rating, setRating] = useState({
    stars: 4
  })

  const handlerCurrencySelection = (currency) => () => {
    setCurrencies(prevState => {
      const updatedValues = {
        currencySelected: currency
      }
      return { ...prevState, ...updatedValues }
    })
  }

  const handlerRoomsSelection = (id) => () => {
    setRooms(prevState => {
      const updatedRoom = prevState.map(room => {
        if (room.id === id) {
          room.selected = !room.selected
        }
        return room
      })

      return updatedRoom
    })
  }

  const handlerRatingSelection = (stars) => () => {
    console.log('stars: ', stars)
  }

  return (
    <Container>
      <CurrencyList
        currencies={currencies}
        handlerCurrencySelection={handlerCurrencySelection}
      />
      <RoomsList
        rooms={rooms}
        handlerRoomsSelection={handlerRoomsSelection}
      />
      <PriceFilter />

      <Rate
        // defaultValue={5}
        // onChange={onChange}
        // style={{ fontSize: 20 }}
        // allowHalf
        // allowClear={false}
      />

      {/* <RatingFilter
        rating={rating}
        handlerRatingSelection={handlerRatingSelection}
      /> */}
    </Container>
  )
}

const Container = styled.div`
  border: 1px solid black;
  margin: 10px;
  padding: 5px;
`
