import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledComponent = styled(({css, ...rest}) => <section {...rest} />)`
    flex: 1;
    z-index: 2;
    max-height: 100vh;
    overflow-y: auto;
    padding: 2em;
    font-weight: 300;
    transition: all 108ms ease;
    a {
      color: #00bbff;
      text-decoration: none;
      &:visited {
        color: #08ffbb;
      }
      &:focus {
        color: #6cff0c;
      }
      &:hover {
        color: #0cf2ff;
        text-decoration: underline;
      }
      &:active {
        transform: scale(1.08);
        color: #00aaee;
      }
      
      
    }
    h1 {
    margin: 0 0 1em 0;
    padding: 1em 0 0 0 ;
    text-align: center;
    }
    h2 {
      margin: 2em 0 1em 0;
      color: #ffff6c;
    }
  
  ul {
    font-size: 1.2em;
    list-style: none;
    margin: 0 0 1em 0;
    padding: 0;
    li {
      padding: 0;
      margin-bottom: .42em;
      > ul {
        margin-left: 2em;
      }
    }
  }
  
  details {
    line-height: 1.42;
    font-size: 1.2em;
    font-family: monospace;
  }
  
  ${p => p.css};
`

const CV_InfoWrapper = (props) => <StyledComponent {...props} />
CV_InfoWrapper.propTypes = {
  css: PropTypes.string,
}

export default CV_InfoWrapper

