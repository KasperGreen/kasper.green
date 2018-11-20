import { injectGlobal, keyframes } from 'styled-components'

const transitionClassName = 'fade'
const duration = 600

const show = keyframes`
from { opacity: 0; transform: scale(.8)}
to { opacity: 1; transform: scale(1)}
`

const hide = keyframes`
from { opacity: 1; transform: scale(1) }
to { opacity: 0; transform: scale(.9)}
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
  animation: ${show} ${duration}ms ease both;
  z-index: 2;
}
.${transitionClassName}-exit-active {
  animation: ${hide} ${duration}ms ease both;
  z-index: 1;
}
`

export default {transition: transitionClassName, duration}
