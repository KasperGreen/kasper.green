import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledComponent = styled(({css, ...rest}) => <div {...rest} />)`
  display: flex;
  ${p => p.css};
`

const CV_Wrapper = (props) => <StyledComponent {...props} />
CV_Wrapper.propTypes = {
  css: PropTypes.string,
}

export default CV_Wrapper

