import React, { Component } from 'react'
import House from './house/House'

export default class HousesList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      houses: []
    }
  }

  async componentDidMount () {
    try {
      let response = await fetch('http://demo4452328.mockable.io/property')
      let houses = await response.json()

      this.setState({
        houses: houses.data
      })
    } catch (error) {
      console.log(error)
    }
  }

  render () {
    const { houses } = this.state

    return (
      <div>
        {houses.map(house => (
          <House
            key={house.id}
            house={house}
          />
        ))}
      </div>
    )
  }
}
