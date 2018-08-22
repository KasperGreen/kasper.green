import React, { Component } from 'react'
import './Home.css'
import appContextConnector from 'context/appContextConnector'
import classNames from 'classnames'
import { scale } from 'containers/App/transitions'

@appContextConnector
export default class Home extends Component {
  state = {
    is_show_menu: true
  }

  toggleFullScreen = () => {
    const {
      props: {
        toggleFullScreen
      }
    } = this
    toggleFullScreen()
  }

  render () {
    const {
      state: {
        is_show_menu
      },
      props: {
        history
      },
      toggleFullScreen
    } = this
    return (
      <div
        className={classNames(
          'Home',
          {
            'Home-show_menu': is_show_menu
          }
        )}
      >
        <div className='Home-mandala' onClick={toggleFullScreen} />
        <button
          className='Home-contacts'
          onClick={() => history.push({pathname: '/contacts', state: scale})}
        >
          Контакты
        </button>
        {/*
        <Link
          className='Home-gallery'
          to={'/gallery'}
        >
          Галлерея
        </Link>
        <Link
          className='Home-process'
          to={'/process'}
        >
          Процесс
        </Link>
        <Link
          className='Home-shop'
          to={'/shop'}
        >
          Магазин
        </Link>
        */}
      </div>
    )
  }

  _hideTimeout = () => {
    clearTimeout(this.hide_timer)
    this.hide_timer = setTimeout(() => {
      this.setState(
        (state) => {
          return {
            ...state,
            is_show_menu: false
          }
        }
      )
    }, this.hide_time)
    return this
  }
  hide_time = 3 * 1000
  hide_timer
  mouseMove = (e) => {
    const {
      state: {
        is_show_menu
      }
    } = this
    this._hideTimeout()
    if (!is_show_menu) {
      this.setState(
        (state) => {
          return {
            ...state,
            is_show_menu: true
          }
        }
      )
    }

  }

  componentDidMount () {
    document.getElementsByTagName('body')[0].addEventListener('mousemove', this.mouseMove)
    this._hideTimeout()
  }

  componentWillUnmount () {
    document.removeEventListener('mousemove', this.mouseMove)
  }

}
