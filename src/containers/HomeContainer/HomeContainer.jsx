import React, { Component } from 'react'
import Home from 'components/Home'
import appContextConnector from 'context/appContextConnector'
import { Wrapper } from 'containers/App/Page'

@appContextConnector
export default class HomeContainer extends Component {
  render () {
    const {
      props: {
        mandala_is_loaded,
        history
      }
    } = this
    if (!mandala_is_loaded) return false

    return (
      <Wrapper>
        <Home {...{history}} />
      </Wrapper>
    )
  }
}
