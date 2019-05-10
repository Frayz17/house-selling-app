import React, { useState } from 'react'
import CurrencyList from './currencies/CurrencyList'
import RoomsList from './rooms/RoomsList'
import Price from './price/Price'
import Rating from './rating/Rating'

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
    value: 4,
    min: 1,
    max: 5
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

  const handlerRatingChange = value => () => {
    setRating(prevState => {
      return {
        ...prevState,
        value
      }
    })
  }

  const handlerSetPriceStart = event => {
    let value = event.target.value
    if (value >= 0) {
      setPrice(prevState => {
        return {
          ...prevState,
          start: value
        }
      })
    }
  }

  const handlerSetPriceEnd = event => {
    let value = event.target.value
    if (value <= 100000) {
      setPrice(prevState => {
        return {
          ...prevState,
          end: value
        }
      })
    }
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

      <Price
        start={price.start}
        end={price.end}
        handlerSetPriceStart={handlerSetPriceStart}
        handlerSetPriceEnd={handlerSetPriceEnd}
      />

      <Rating
        min={rating.min}
        max={rating.max}
        value={rating.value}
        onChange={handlerRatingChange}
      />

    </Container>
  )
}

const Container = styled.div`
  border: 1px solid black;
  margin: 10px;
  padding: 5px;
`