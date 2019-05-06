import React from 'react'
import RatingItem from './RatingItem'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const range = (min, max) =>
  Array(max - min + 1).fill().map((_, i) => min + i)

export default function Rating ({ min, max, onChange, value }) {
  return (
    <RatingBox>
      {
        range(min, max).map(item => (
          <RatingItem
            colored={value >= item}
            checked={value === item}
            value={item}
            onChange={onChange}
          />
        ))
      }
    </RatingBox>
  )
}

Rating.prototypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

const RatingBox = styled.div`
  line-height: 1;
  display: inline-block;

  
`
