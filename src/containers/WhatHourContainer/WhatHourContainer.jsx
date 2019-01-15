import React, { Component, Fragment } from 'react'
import './css/WhatHour.css'
import { slide_left } from 'containers/App/transitions'
import BackButton from 'components/BackButton/BackButton'

export default class WhatHourContainer extends Component {

  render () {
    return (
      <Fragment>
        <BackButton invert to_right to={{pathname: '/', state: slide_left}} />
        <div className='WhatHour'>
          Сейчас: {String(Math.ceil(new Date().getTime() / 3600000)).replace(/(.{3})/, '$1 ')} час
        </div>
      </Fragment>
    )
  }

  update_component_interval

  componentDidMount () {
    this.update_component_interval = setInterval(() => {
      this.forceUpdate()
    }, 10000)
  }

  componentWillUnmount () {
    clearInterval(this.update_component_interval)
  }

}
