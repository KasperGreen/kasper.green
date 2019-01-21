import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledComponent = styled(({css, ...rest}) => <div {...rest} />)`
  &:first-letter {
    text-transform: uppercase;
  }
  
  ${p => p.css};
`

const WhatHourFallbacWrapper = (props) => <StyledComponent {...props} />
WhatHourFallbacWrapper.propTypes = {
  css: PropTypes.string,
}

export default WhatHourFallbacWrapper

