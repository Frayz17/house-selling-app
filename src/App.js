import React, { useState } from 'react'
import HousesList from './components/house/HousesList'

import FiltersList from './components/filters/FiltersList'

import styled from 'styled-components'

export default function App () {
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
    end: 10000000,
    startDemand: 0,
    endDemand: 10000000
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
    if (value >= price.startDemand && value <= price.end) {
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
    if (value <= price.endDemand && value >= price.start) {
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

      <FiltersListWrapper>
        <FiltersList
          currencies={currencies}
          rooms={rooms}
          price={price}
          rating={rating}
          handlerCurrencySelection={handlerCurrencySelection}
          handlerRoomsSelection={handlerRoomsSelection}
          handlerSetPriceEnd={handlerSetPriceEnd}
          handlerSetPriceStart={handlerSetPriceStart}
          handlerRatingChange={handlerRatingChange}
        />
      </FiltersListWrapper>

      <HousesListWrapper>
        <HousesList
          currencies={currencies}
          rooms={rooms}
          price={price}
          rating={rating}
        />
      </HousesListWrapper>

    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 800px;
  margin: auto;
`
const FiltersListWrapper = styled.div`
  width: 300px;
`

const HousesListWrapper = styled.div`
  // width: 100%;
`
