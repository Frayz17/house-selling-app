import React, { useState, useEffect } from 'react'

import axios from 'axios'
import House from './House'

import PropTypes from 'prop-types'

export default function HousesList ({
  currencies,
  rooms,
  price,
  rating
}) {
  const [houses, setHouses] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://demo4452328.mockable.io/property')

      setHouses(result.data.data)
    }

    fetchData()
  }, [])

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

HousesList.prototypes = {
  currencies: PropTypes.object.isRequired,
  rooms: PropTypes.array.isRequired,
  price: PropTypes.object.isRequired,
  rating: PropTypes.object.isRequired
}
