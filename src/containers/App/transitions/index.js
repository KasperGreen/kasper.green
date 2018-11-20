import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

// the childFactory allows to change the transition of the leaving component
// https://github.com/reactjs/react-transition-group/issues/182
const childFactoryCreator = (props) => child => React.cloneElement(child, props)

export default ({ transition = '', duration = 0, pageKey, children }) => (
  <TransitionGroup
    childFactory={childFactoryCreator({ classNames: transition, timeout: duration })}
  >
    <CSSTransition key={pageKey}>
      {/* you should wrap CSSTransition child in a div in case it could be null
      see https://github.com/reactjs/react-transition-group/issues/208 */}
      <div>{ children }</div>
    </CSSTransition>
  </TransitionGroup>
)

export { default as scale_left } from './scale_left'
export { default as scale_right } from './scale_right'
export { default as slide_left } from './slide_left'
export { default as slide_right } from './slide_right'
export { default as slide_top } from './slide_top'
export { default as slide_bottom } from './slide_bottom'
export { default as fade } from './fade'
