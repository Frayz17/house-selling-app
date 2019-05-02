import React from 'react'
import styled from 'styled-components'

export default function Currency ({ currencyName, currencySelected, handlerCurrencySelection }) {
  return (
    <CurrencyBtn
      selected={currencySelected === currencyName ? true : null}
      onClick={handlerCurrencySelection(currencyName)}>
      {currencyName}
    </CurrencyBtn>
  )
}

const CurrencyBtn = styled.button`
  display: inline-box;
  background: ${props => props.selected ? 'green' : null}
`
