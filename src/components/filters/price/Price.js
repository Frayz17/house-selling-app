import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default function Price ({ start, end, handlerSetPriceStart, handlerSetPriceEnd }) {
  return (
    <div>
      <label>
        от
        <input type='number' onChange={handlerSetPriceStart} value={start} />
      </label>

      <label>
        до
        <input type='number' onChange={handlerSetPriceEnd} value={end} />
      </label>
    </div>
  )
}

Price.prototypes = {
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  handlerSetPrice: PropTypes.func.isRequired
}
