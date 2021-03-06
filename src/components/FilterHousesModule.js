import React, { useState } from 'react'
import HousesList from './house/HousesList'
import FiltersList from './filters/FiltersList'
import styled from 'styled-components'

export default function FilterHousesModule () {
  const [currencies, setCurrencies] = useState({
    list: [
      'uah',
      'usd',
      'eur'
    ],
    selected: 'uah'
  })

  const [rooms, setRooms] = useState([
    { id: '1', amount: 'all', selected: true },
    { id: '2', amount: 1, selected: false },
    { id: '3', amount: 2, selected: false },
    { id: '4', amount: 3, selected: false }
  ])

  const [price, setPrice] = useState({
    start: 1,
    end: 1000000000,
    startDemand: 1,
    endDemand: 1000000000
  })

  const [rating, setRating] = useState({
    value: 4,
    min: 1,
    max: 5
  })

  const handlerCurrencySelection = (currency) => () => {
    setCurrencies(prevState => {
      const updatedValues = {
        selected: currency
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
    let value = parseInt(event.target.value)
    if (value >= price.startDemand && value <= price.end && !isNaN(value)) {
      setPrice(prevState => {
        return {
          ...prevState,
          start: value
        }
      })
    }
  }

  const handlerSetPriceEnd = event => {
    let value = parseInt(event.target.value)
    if (value <= price.endDemand && value >= price.start && !isNaN(value)) {
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
          currency={currencies.selected}
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
