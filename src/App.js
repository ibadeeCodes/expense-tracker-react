import React, { Fragment } from 'react'

import '@material-ui/core'
import { Container } from '@material-ui/core'
import FormTracker from './components/FormTracker'
import TrackerState from './context/tracker/TrackerState'
import './App.css'

const App = () => {
  return (
    <TrackerState>
      <Fragment>
        <Container maxWidth='sm'>
          <FormTracker />
        </Container>
      </Fragment>
    </TrackerState>
  )
}

export default App
