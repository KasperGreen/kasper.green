import { injectGlobal, keyframes } from 'styled-components'

const transitionClassName = 'slide_bottom'
const duration = 108

const moveToTop = keyframes`
from { transform: translateY(0); }
to { transform: translateY(-100%); }
`
const moveFromBottom = keyframes`
from { transform: translateY(100%); }
to { transform: translateY(0);}
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
  animation: ${moveFromBottom} ${duration}ms cubic-bezier(0, 0, 0, .99) both;
  z-index: 2;
}
.${transitionClassName}-exit-active {
  animation: ${moveToTop} ${duration}ms cubic-bezier(0, 0, 0, .99) both;
  z-index: 1;
}
`

export default {transition: transitionClassName, duration}
