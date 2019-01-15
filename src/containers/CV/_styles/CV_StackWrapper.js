import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledComponent = styled(({css, ...rest}) => <div {...rest} />)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  
  ${p => p.css};
`

const CV_StackWrapper = (props) => <StyledComponent {...props} />
CV_StackWrapper.propTypes = {
  css: PropTypes.string,
}

export default CV_StackWrapper

