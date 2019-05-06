import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default function Price ({ start, end }) {
  return (
    <div>
      <label>
        от
        <input type='number' />
      </label>

      <label>
        до
        <input type='number' />
      </label>
    </div>
  )
}

Price.prototypes = {
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired
}
