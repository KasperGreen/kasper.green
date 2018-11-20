import React, { Component } from 'react'
import './css/WhatHour.css'

export default class WhatHourContainer extends Component {
  render () {
    return (
      <div className='WhatHour'>
        Сейчас: {Math.ceil(new Date().getTime() / 3600000).toString().replace(/(.{3})/, '$1 ')} час
      </div>
    )
  }
}
