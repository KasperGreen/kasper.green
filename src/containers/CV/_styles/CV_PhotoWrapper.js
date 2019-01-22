import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledComponent = styled(({css, ...rest}) => <div {...rest} />)`
  float: left;
  max-width: 50%;
  @media(max-width: 640px) {
    max-width: 22%;
    padding-top: 50vmin;
  }
  position: relative;
  opacity: .42;
  figure {
    margin: 0;
    padding: 0;
    &:hover {
      figcaption {
        opacity: .1;
      }
      img {
        opacity: 1;
      }
    }
  }
  figcaption {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    color: #10ff5e;
    transition: all .22s ease-out;
  }
  img {
    opacity: .042;
    max-width: 100%;
    max-height: 100vh;
    transition: all .22s ease-out;
  }
  
  ${p => p.css};
`

const CV_PhotoWrapper = (props) => <StyledComponent {...props} />
CV_PhotoWrapper.propTypes = {
  css: PropTypes.string,
}

export default CV_PhotoWrapper

