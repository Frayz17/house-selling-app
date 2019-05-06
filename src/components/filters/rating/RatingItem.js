import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default function RatingItem ({ value, checked, colored, onChange }) {
  return (
    <ItemBox
      colored={colored}
      className={`rating__item ${colored ? 'rating__item--selected' : ''}`}
    >
      <Item
        checked={checked}
        className='rating__input'
        onChange={onChange(value)}
        type='radio'
        value={value}
      />
    </ItemBox>
  )
}

RatingItem.prototypes = {
  colored: PropTypes.bool.isRequired,
  checked: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

const ItemBox = styled.label`
  display: inline;
  font-size: 0;

  ::before {
    content: "★";
    font-size: 22px;
    color: ${props => props.colored ? 'orange' : 'lightgray'};
  }
`

const Item = styled.input`
  position: absolute;
  visibility: hidden;
`
