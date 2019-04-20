import React, { Component } from 'react'
import CurrencyFilter from './filters/currencies/CurrencyFilter'
import RoomsFilter from './filters/RoomsFilter'
import PriceFilter from './filters/PriceFilter'
import RatingFilter from './filters/RatingFilter'
import styled from 'styled-components'

export default class HousesFilter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currencies: {
        currencyList: [
          'uah',
          'usd',
          'eur'
        ],
        currencySelected: 'uah'
      },
      rooms: {
        all: true,
        room1: false,
        room2: false,
        room3: false
      },
      price: {
        start: 0,
        end: 100000
      },
      rating: {
        stars: null
      }
    }
  }

  render () {
    const { currencies } = this.state

    return (
      <Container>
        <CurrencyFilter
          currencies={currencies}
        />
        <RoomsFilter />
        <PriceFilter />
        <RatingFilter />
      </Container>
    )
  }
}

const Container = styled.div`
  border: 1px solid black;
  margin: 10px;
  padding: 5px;
`
