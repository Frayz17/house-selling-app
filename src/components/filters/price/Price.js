import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default function Price ({ start, end, handlerSetPriceStart, handlerSetPriceEnd, currency }) {
  return (
    <div>
      <LabelBox>
        <span>от </span>
        <input type='text' onChange={handlerSetPriceStart} value={start} />
      </LabelBox>

      <LabelBox>
        <span>до </span>
        <input type='text' onChange={handlerSetPriceEnd} value={end} />
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
