import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledComponent = styled(({css, ...rest}) => <section {...rest} />)`
    flex: 1;
    max-height: 100vh;
    overflow-y: auto;
    padding: 2em;
    font-weight: 300;
    h1 {
    margin: 0 0 1em 0;
    padding: 1em 0 0 0 ;
    text-align: center;
    }
    h2 {
      margin: 0 0 1em 0;
      color: #ffff6c;
    }
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      padding: 0;
      margin-bottom: .42em;
      > ul {
        margin-left: 2em;
      }
    }
  }
  
  ${p => p.css};
`

const CV_InfoWrapper = (props) => <StyledComponent {...props} />
CV_InfoWrapper.propTypes = {
  css: PropTypes.string,
}

export default CV_InfoWrapper

