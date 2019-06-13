import React, { useState, useEffect } from 'react'
import axios from 'axios'
import House from './House'
import PropTypes from 'prop-types'

export default function HousesList ({
  currency,
  rooms,
  price,
  rating
}) {
  const [houses, setHouses] = useState([])
  let filteredHouses = []

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://demo4452328.mockable.io/property')

      let filterHousesByCurrency = result.data.data.map(house => handlerPriceAccordingCurrency(house, currency))

      setHouses(filterHousesByCurrency)
    }

    fetchData()
  }, [currency])

  const handlerPriceAccordingCurrency = (house, currency) => {
    switch (currency) {
      case 'usd':
        house.price = Math.round(house.price / 26)
        break
      case 'eur':
        house.price = Math.round(house.price / 30)
        break
      default:
        break
    }
    return house
  }

  function handlerFilter (house, price, rating) {
    if (house.rating <= rating.value &&
      house.price >= price.start &&
      house.price <= price.end) {
      return true
    }
    return false
  }

  function handlerFilterRooms (rooms, houses) {
    let filteredHouses = []
    for (let i = 0; i < rooms.length; i++) {
      if (rooms[i].amount === 'all' && rooms[i].selected) {
        filteredHouses = [...houses]
        break
      } else {
        if (rooms[i].selected) {
          filteredHouses = filteredHouses.concat(
            houses.filter(house => house.total_rooms === rooms[i].amount)
          )
        }
      }
    }
    return filteredHouses
  }

  filteredHouses = houses.filter(house => handlerFilter(house, price, rating))
  filteredHouses = handlerFilterRooms(rooms, filteredHouses)

  return (
    <div>
      {filteredHouses.map(house => (
        <House
          key={house.id}
          house={house}
          currency={currency}
        />
      ))}
    </div>
  )
}

HousesList.propTypes = {
  currency: PropTypes.string.isRequired,
  rooms: PropTypes.array.isRequired,
  price: PropTypes.object.isRequired,
  rating: PropTypes.object.isRequired
}
