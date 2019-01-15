import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import bg from '../_images/new_bg.jpg'
import bg_portrait from '../_images/portrait.jpg'

const StyledComponent = styled(({css, ...rest}) => <figure {...rest} />)`
  margin: 0;
  padding: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: url(${bg}) top center no-repeat;
  @media(orientation: portrait) {
    background-image: url(${bg_portrait});
  }
  background-size: cover;  
  ${p => p.css};
`

const HomeBackground = (props) => <StyledComponent {...props} />
HomeBackground.propTypes = {
  css: PropTypes.string,
}

export default HomeBackground

