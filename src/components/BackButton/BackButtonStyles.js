import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import back_image from './images/back.svg'
import close_image from './images/close.svg'

const BackButtonStyles = styled.div`
  padding: 0;
  z-index: 42;
  cursor: pointer;
  position: absolute;
  left: 4.2vmin;
  top: 5.2vmin;
  width: 12vmin;
  height: 12vmin;
  border-radius: 3.1415926535vmin;
  opacity: .42;
  box-shadow: none;
  border: none;
  overflow: hidden;
  ${p => p.invert && css`
filter: invert(1);
`}
  ${p => p.to_top && css`
    transform: rotate(90deg);
`}
  ${p => p.to_right && css`
    transform: rotate(180deg);
    left: auto;
    right: 4.2vmin;
`}
  &:after {
    transition: transform .2s ease-out, opacity .42s ease;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url(${back_image}) center center no-repeat;
    ${p => p.close && css`
      background-image: url(${close_image});
    `};
    
    background-size: contain;
  }
  &:focus {
    outline: none;
    
    &:after {
      transform: scale(1.12);
    }
  }
  &:hover {
    opacity: 1;
  }
  
 
`.withComponent(Link)
export default BackButtonStyles
