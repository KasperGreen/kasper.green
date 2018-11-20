import { injectGlobal, keyframes } from 'styled-components'

const transitionClassName = 'slide_right'
const duration = 420

const moveFromLeft = keyframes`
from { transform: translateX(-100%); opacity: 1;}
`
const scaleDown = keyframes`
to { transform: translateX(100%); opacity: 0;}
`

injectGlobal`
.${transitionClassName}-enter, .${transitionClassName}-exit {
   height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
}
.${transitionClassName}-enter-active {
  animation: ${moveFromLeft} ${duration}ms cubic-bezier(0, 0, 0, .99) both;
  z-index: 2;
}
.${transitionClassName}-exit-active {
  animation: ${scaleDown} ${duration}ms cubic-bezier(0, 0, 0, .99) both;
  z-index: 1;
}
`

export default { transition: transitionClassName, duration }
