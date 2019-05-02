import React from 'react'
import Currency from './Currency'

export default function CurrencyFilter ({ currencies, handlerCurrencySelection }) {
  const { currencyList, currencySelected } = currencies

  return (
    <div>
      <h3>Валюта</h3>
      {currencyList.map(currency => (
        <Currency
          key={currency}
          currencyName={currency}
          currencySelected={currencySelected}
          handlerCurrencySelection={handlerCurrencySelection}
        />
      ))}
    </div>
  )
}
