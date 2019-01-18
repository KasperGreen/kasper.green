import { injectGlobal, keyframes } from 'styled-components'

const transitionClassName = 'slide_left'
const duration = 108

const moveFromRight = keyframes`
from { transform: translateX(100%); }
to { transform: translateX(0); 
}

`
const moveToLeft = keyframes`
from { transform: translateX(0); }
to { transform: translateX(-100%); }
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
  animation: ${moveFromRight} ${duration}ms cubic-bezier(0, 0, 0, .99) both;
  z-index: 2;
}
.${transitionClassName}-exit-active {
  animation: ${moveToLeft} ${duration}ms cubic-bezier(0, 0, 0, .99) both;
  z-index: 1;
}
`

export default {transition: transitionClassName, duration}
