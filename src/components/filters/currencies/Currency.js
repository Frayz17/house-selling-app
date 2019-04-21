import React from 'react'
import styled from 'styled-components'

export default function Currency ({ currency, handlerCurrencySelection }) {
  return (
    <CurrencySelection onClick={handlerCurrencySelection(currency)}>{currency}</CurrencySelection>
  )
}

const CurrencySelection = styled.button`
  display: inline-box;
`
