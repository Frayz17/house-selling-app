import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default function Price ({ start, end, handlerSetPriceStart, handlerSetPriceEnd }) {
  return (
    <div>
      <LabelBox>
        от
        <input type='number' onChange={handlerSetPriceStart} value={start} />
      </LabelBox>

      <LabelBox>
        до
        <input type='number' onChange={handlerSetPriceEnd} value={end} />
      </LabelBox>
    </div>
  )
}

const LabelBox = styled.label`
  display: inline-block;
`

Price.prototypes = {
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  handlerSetPrice: PropTypes.func.isRequired
}
