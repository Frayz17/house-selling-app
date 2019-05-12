import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default function Price ({ start, end, handlerSetPriceStart, handlerSetPriceEnd, currency }) {
  return (
    <div>
      <LabelBox>
        от
        <input type='number' onChange={handlerSetPriceStart} value={start} />
        {currency}
      </LabelBox>

      <LabelBox>
        до
        <input type='number' onChange={handlerSetPriceEnd} value={end} />
        {currency}
      </LabelBox>
    </div>
  )
}

const LabelBox = styled.label`
  display: inline-block;

  input {
    display: inline-Blocck;
    width: 100px;
  }
`

Price.prototypes = {
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  handlerSetPriceStart: PropTypes.number.isRequired,
  handlerSetPriceEnd: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired
}
