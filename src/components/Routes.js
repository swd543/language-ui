import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import MultiClapHolder from './MultiClapHolder'

const Routes = props => {
  return (
    <BrowserRouter>
      <Route path="/clap" component={MultiClapHolder} />
    </BrowserRouter>
  )
}

export default Routes
