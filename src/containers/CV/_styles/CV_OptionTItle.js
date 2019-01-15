import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledComponent = styled(({css, ...rest}) => <span {...rest} />)`
  color: #bebebe;
  
  ${p => p.css};
`

const CV_OptionTItle = (props) => <StyledComponent {...props} />
CV_OptionTItle.propTypes = {
  css: PropTypes.string,
}

export default CV_OptionTItle

