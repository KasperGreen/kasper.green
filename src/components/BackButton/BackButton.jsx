import React, { Component } from 'react'
import BackButtonStyles from 'components/BackButton/BackButtonStyles'
import PropTypes from 'prop-types'

export default class BackButton extends Component {
  render () {
    return (
      <BackButtonStyles {...this.props} />
    )
  }

  static propTypes = {
    invert: PropTypes.bool,
    to: PropTypes.oneOfType(
      [
        PropTypes.object,
        PropTypes.string
      ]
    ),
    to_top: PropTypes.bool,
    to_right: PropTypes.bool,
    close: PropTypes.bool
  }

}
