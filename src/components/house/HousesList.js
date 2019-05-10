import React, { useState, useEffect } from 'react'
import axios from 'axios'
import House from './House'

export default function HousesList () {
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
