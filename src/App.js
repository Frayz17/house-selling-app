import React, { Component } from 'react'
import HousesList from './components/HousesList'
import FiltersList from './components/FiltersList'
import styled from 'styled-components'

export default class App extends Component {
  render () {
    return (
      <Container>

        <FiltersListWrapper>
          <FiltersList />
        </FiltersListWrapper>

        <HousesListWrapper>
          <HousesList />
        </HousesListWrapper>

      </Container>
    )
  }
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
