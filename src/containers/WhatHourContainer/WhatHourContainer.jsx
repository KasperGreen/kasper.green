import React, { Component, Fragment } from 'react'
import './css/WhatHour.css'
import { slide_left } from 'containers/App/transitions'
import BackButton from 'components/BackButton/BackButton'
import numeralize from 'numeralize-ru'
import WhatHourFallbacWrapper from 'containers/WhatHourContainer/WhatHourFallbacWrapper'

export default class WhatHourContainer extends Component {

  render () {
    const {
      text_hour,
      need_fallback,
      hour
    } = this

    return (
      <Fragment>
        <BackButton
          invert
          to_right
          to={{
            pathname: '/',
            state: slide_left
          }}
        />
        <div className='WhatHour'>
          {need_fallback
           ?
           <WhatHourFallbacWrapper>
             {numeralize(hour - 1)} {numeralize.pluralize(hour - 1, 'час прошёл', 'часа прошло', 'часов прошло')} с
             начала эпохи юникс
           </WhatHourFallbacWrapper>
           :
           <div>
             Сейчас {text_hour}&nbsp;час от&nbsp;начала&nbsp;эпохи&nbsp;UNIX
           </div>
          }
        </div>
      </Fragment>
    )
  }

  update_component_interval

  get hour () {
    return Number(Math.ceil(new Date().getTime() / 3600000))
  }

  get need_fallback () {
    const {
      hour
    } = this

    return /0{3,}$/.test(String(hour))
  }

  get text_hour () {
    const {
        hour,
        switchRightText
      } = this,
      [left, right] = numeralize(hour).split(/\s(?=[а-яА-ЯёЁ]+$)/)
    return [right && left, (switchRightText(right || left))].join(' ')
  }

  componentDidMount () {
    this.update_component_interval = setInterval(() => {
      this.forceUpdate()
    }, 10000)
  }

  componentWillUnmount () {
    clearInterval(this.update_component_interval)
  }

  switchRightText (text) {
    switch (text) {
      case 'один':
        return 'первый'
      case 'два':
        return 'второй'
      case 'три':
        return 'третий'
      case 'четыре':
        return 'четвёртый'
      case 'пять':
        return 'пятый'
      case 'шесть':
        return 'шестой'
      case 'семь':
        return 'седьмой'
      case 'восемь':
        return 'восьмой'
      case 'девять':
        return 'девятый'
      case 'десять':
        return 'десятый'
      case 'одинадцать':
        return 'одинадцатый'
      case 'двенадцать':
        return 'двенадцатый'
      case 'тринадцать':
        return 'тринадцатый'
      case 'четырнадцать':
        return 'четырнадцатый'
      case 'пятнадцать':
        return 'пятнадцатый'
      case 'шестнадцать':
        return 'шестнадцатый'
      case 'семнадцать':
        return 'семнадцатый'
      case 'восемнадцать':
        return 'восемнадцатый'
      case 'девятнадцать':
        return 'девятнадцатый'
      case 'двадцать':
        return 'двадцатый'
      case 'тридцать':
        return 'тридцатый'
      case 'сорок':
        return 'сороковой'
      case 'пятьдесят':
        return 'пятидесятый'
      case 'шестьдесять':
        return 'шестидесятый'
      case 'семдесят':
        return 'семидесятый'
      case 'восемдесят':
        return 'восьмидесятый'
      case 'девяносто':
        return 'девяностый'
      case 'сто':
        return 'сотый'
      case 'двести':
        return 'двухсотый'
      case 'триста':
        return 'трёхсотый'
      case 'четыреста':
        return 'четырехсотый'
      case 'пятьсот':
        return 'пятисотый'
      case 'шестьсот':
        return 'шестисотый'
      case 'сьмьсот':
        return 'семисотый'
      case 'восемьсот':
        return 'восьмисотый'
      case 'девятьсот':
        return 'девятисотый'
      default:
        return text

    }
  }

}
