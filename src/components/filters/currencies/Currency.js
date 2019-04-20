import React from 'react'
import styled from 'styled-components'

export default function Currency ({ currency }) {
  return (
    <CurrencySelection>{currency}</CurrencySelection>
  )
}

const CurrencySelection = styled.button`
  display: inline-box;
`
