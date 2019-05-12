import React from 'react'

import CurrencyList from './currencies/CurrencyList'
import RoomsList from './rooms/RoomsList'
import Price from './price/Price'
import Rating from './rating/Rating'

import PropTypes from 'prop-types'
import styled from 'styled-components'

export default function FiltersList ({
  currencies,
  rooms,
  price,
  rating,
  handlerCurrencySelection,
  handlerRoomsSelection,
  handlerSetPriceEnd,
  handlerSetPriceStart,
  handlerRatingChange
}) {
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
        currency={currencies.selected}
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

FiltersList.prototypes = {
  currencies: PropTypes.object.isRequired,
  rooms: PropTypes.array.isRequired,
  price: PropTypes.object.isRequired,
  rating: PropTypes.object.isRequired,

  handlerCurrencySelection: PropTypes.func.isRequired,
  handlerRoomsSelection: PropTypes.func.isRequired,
  handlerSetPriceEnd: PropTypes.func.isRequired,
  handlerSetPriceStart: PropTypes.func.isRequired,
  handlerRatingChange: PropTypes.func.isRequired
}

const Container = styled.div`
  border: 1px solid black;
  margin: 10px;
  padding: 5px;
`
