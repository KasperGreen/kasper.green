import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledComponent = styled(({css, ...rest}) => <span {...rest} />)`
  font-weight: 700;
  color: rgba(187,242,222,0.72);
  
  ${p => p.css};
`

const CV_KasperName = (props) => <StyledComponent {...props} />
CV_KasperName.propTypes = {
  css: PropTypes.string,
}

export default CV_KasperName

