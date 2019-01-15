import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledComponent = styled(({css, ...rest}) => <div {...rest} />)`
  max-width: 32em;
  margin: 0 auto;
  
  ${p => p.css};
`

const CV_InfoInnerWrapper = (props) => <StyledComponent {...props} />
CV_InfoInnerWrapper.propTypes = {
  css: PropTypes.string,
}

export default CV_InfoInnerWrapper

