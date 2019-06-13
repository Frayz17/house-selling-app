import React from 'react'
import FilterHousesModule from './components/FilterHousesModule'
import Checkout from './components/Checkout'
import { BrowserRouter as Router, Route } from 'react-router-dom'

export default function App () {
  return (
    <Router>
      <Route path='/' exact component={FilterHousesModule} />
      <Route path='/checkout/:id' component={Checkout} />
    </Router>
  )
}
