import React from 'react'
import Currency from './Currency'

export default function CurrencyFilter ({ currencies, handlerCurrencySelection }) {
  const { list, selected } = currencies

  return (
    <div>
      <h3>Валюта</h3>
      {list.map(currency => (
        <Currency
          key={currency}
          currencyName={currency}
          selected={selected}
          handlerCurrencySelection={handlerCurrencySelection}
        />
      ))}
    </div>
  )
}
