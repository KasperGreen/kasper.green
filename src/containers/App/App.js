import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import AppContext from 'context/AppContext'
import { DETECTED_KEYBOARD_USER_CLASS_NAME } from 'constants/APP'
import 'fonts/Roboto/stylesheet.css'
import 'fonts/Marck_Script/stylesheet.css'
import 'normalize.css'
import './variables.css'
import 'css/margins.css'
import './App.css'
import _, { debounce } from 'lodash'
import { hot } from 'react-hot-loader'
import PageNotFound from 'containers/PageNotFound'
import HomeContainer from 'containers/HomeContainer/HomeContainer'
import ContactsContainer from 'containers/ContactsContainer'
import Transitions from './transitions'
import FullScreen from 'react-fullscreen-crossbrowser'
import WhatHourContainer from 'containers/WhatHourContainer'
import CV from 'containers/CV'

const PageTransitionContext = React.createContext({})

const Perspective = styled.div`
  width: 100vw;
  height: 100vh;
  perspective: 1200px;
`

class App extends Component {
  state = {
    last_mouse_active_time: new Date(),
    isFullscreenEnabled: false
  }

  render () {
    const {
      setPrevPage,
      setActivePage,
      toggleFullScreen,
    } = this

    return (
      <AppContext.Provider
        value={
          {
            ...this.state,
            toggleFullScreen,
            setPrevPage,
            setActivePage
          }}
      >
        <Router>
          <FullScreen
            enabled={this.state.isFullscreenEnabled}
            onChange={toggleFullScreen}
          >
            <Route
              render={({location}) => (
                <PageTransitionContext.Provider value={{...location.state}}><Perspective>
                  <Transitions pageKey={location.key} {...location.state}>
                    <Switch location={location}>
                      <Route path={'/'} exact component={HomeContainer} />
                      <Route path={'/what-hour'} component={WhatHourContainer} />
                      <Route path={'/contacts'} exact component={ContactsContainer} />
                      <Route path={'/cv'} exact component={CV} />
                      <Route component={PageNotFound} />
                    </Switch>
                  </Transitions>
                </Perspective></PageTransitionContext.Provider>
              )}
            />
          </FullScreen>
        </Router>
      </AppContext.Provider>
    )
  }

  debouncedMouseMove = () => {
    return this.mousemove
  }
  keyboardUserEvent = e => {
    const keyCode = e.keyCode || e.which

    if (keyCode === 9) {
      if (typeof window !== 'undefined') {
        if (!_.get(window, DETECTED_KEYBOARD_USER_CLASS_NAME)) {
          window[DETECTED_KEYBOARD_USER_CLASS_NAME] = true
          const htmlRoot = document.getElementsByTagName('html')[0]
          htmlRoot.classList.add(DETECTED_KEYBOARD_USER_CLASS_NAME)
        }
      }
    }
  }
  mouseUserEvent = e => {
    const is_enter_press_click = e.clientX === 0 && e.clientY === 0
    if (
      !is_enter_press_click &&
      _.get(window, DETECTED_KEYBOARD_USER_CLASS_NAME)
    ) {
      window[DETECTED_KEYBOARD_USER_CLASS_NAME] = false
      document
        .getElementsByTagName('html')[0]
        .classList.remove(DETECTED_KEYBOARD_USER_CLASS_NAME)
    }
  }
  mousemove = (e) => {
    this.setState(
      (state) => {
        return {
          ...state,
          last_mouse_active_time: new Date()
        }
      }
    )

  }
  removePreloadedStyles = () => {
    const preload_styles = document.getElementById('preload_styles')
    if (preload_styles) preload_styles.remove()
  }
  setActivePage = (active_page) => {
    this.setState(
      (state) => {
        state.animated_pages.active = active_page
        return state
      })
  }
  setPrevPage = (prev_page) => {
    this.setState(
      (state) => {
        state.animated_pages.prev = prev_page
        return state
      })
  }
  toggleFullScreen = (value) => {
    const {
      state: {
        isFullscreenEnabled
      }
    } = this

    this.setState(
      (state) => {
        return {
          ...state,
          isFullscreenEnabled: value ? value : !isFullscreenEnabled

        }
      }
    )
  }

  componentDidMount () {
    document.addEventListener('click', this.mouseUserEvent)
    document.addEventListener('keydown', this.keyboardUserEvent)
    this.removePreloadedStyles()
    document.getElementsByTagName('body')[0].addEventListener('mousemove', debounce(this.mousemove, 108))
  }
}

export default hot(module)(App)
