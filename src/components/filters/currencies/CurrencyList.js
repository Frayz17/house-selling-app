import React from 'react'
import Currency from './Currency'

export default function CurrencyFilter ({ currencies, handlerCurrencySelection }) {
  const { currencyList } = currencies

  return (
    <div>
      <h3>Валюта</h3>
      {currencyList.map(currency => (
        <Currency
          key={currencyList.indexOf(currency)}
          currency={currency}
          handlerCurrencySelection={handlerCurrencySelection}
        />
      ))}
    </div>
  )
}
