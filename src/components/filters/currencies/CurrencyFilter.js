import React from 'react'
import Currency from './Currency'

export default function CurrencyFilter ({ currencies }) {
  const { currencyList, currencySelected } = currencies

  return (
    <div>
      <h3>Валюта</h3>
      {currencyList.map(currency => (
        <Currency
          key={currencyList.indexOf(currency)}
          currency={currency}
          currencySelected={currencySelected}
        />
      ))}
    </div>
  )
}
