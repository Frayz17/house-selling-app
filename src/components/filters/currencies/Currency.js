import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export default function Currency ({ currencyName, selected, handlerCurrencySelection }) {
  return (
    <CurrencyBtn
      selected={selected === currencyName ? true : null}
      onClick={handlerCurrencySelection(currencyName)}>
      {currencyName}
    </CurrencyBtn>
  )
}

const CurrencyBtn = styled.button`
  display: inline-box;
  background: ${props => props.selected ? 'green' : null}
`

Currency.propTypes = {
  currencyName: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  handlerCurrencySelection: PropTypes.func.isRequired
}
