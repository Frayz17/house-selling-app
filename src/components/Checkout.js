import React from 'react'

export default function App ({ match }) {
  const { id } = match.params
  return (
    <div>
      <h2>Checkout Page</h2>
      <p>ID of choosen house is <span>{id}</span></p>
    </div>
  )
}
