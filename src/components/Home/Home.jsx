import React, { Component } from 'react'
import './Home.css'
import appContextConnector from 'context/appContextConnector'
import classNames from 'classnames'
import { slide_bottom, slide_left, slide_right } from 'containers/App/transitions'
import { Link } from 'react-router-dom'
import HomeBackground from 'components/Home/_styles/HomeBackground'

@appContextConnector
export default class Home extends Component {
  state = {
    is_show_menu: true
  }

  render () {
    const {
      state: {
        is_show_menu
      }
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
        <HomeBackground />
        <Link
          className='Home-contacts'
          to={{pathname: '/contacts', state: slide_left}}
        >
          Контакты
        </Link>
        <Link
          className='Home-what-hour'
          to={{pathname: '/what-hour', state: slide_right}}
        >Который час‽</Link>
        <Link
          className='Home-cv'
          to={{pathname: '/cv', state: slide_bottom}}
        >Резюме</Link>
        {/*
        <Link
          className='Home-what-hour'
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
  toggleFullScreen = () => {
    const {
      props: {
        toggleFullScreen
      }
    } = this
    toggleFullScreen()
  }

  componentDidMount () {
    document.getElementsByTagName('body')[0].addEventListener('mousemove', this.mouseMove)
    this._hideTimeout()
  }

  componentWillUnmount () {
    document.removeEventListener('mousemove', this.mouseMove)
  }

}
