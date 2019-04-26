import React, { useState } from 'react'
import CurrencyList from './filters/currencies/CurrencyList'
import RoomsFilter from './filters/RoomsFilter'
import PriceFilter from './filters/PriceFilter'
import RatingFilter from './filters/RatingFilter'
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

  const [rooms, setRooms] = useState({
    all: true,
    room1: false,
    room2: false,
    room3: false
  })

  const [price, setPrice] = useState({
    start: 0,
    end: 100000
  })

  const [rating, setRating] = useState({
    stars: null
  })

  const handlerCurrencySelection = (currency) => () => {
    setCurrencies(prevState => {
      const updatedValues = {
        currencySelected: currency
      }
      return { ...prevState, ...updatedValues }
    })
  }

  return (
    <Container>
      <CurrencyList
        currencies={currencies}
        handlerCurrencySelection={handlerCurrencySelection}
      />
      <RoomsFilter />
      <PriceFilter />
      <RatingFilter />
    </Container>
  )
}

const Container = styled.div`
  border: 1px solid black;
  margin: 10px;
  padding: 5px;
`
