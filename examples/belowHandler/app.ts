import freeDrag from "../../src"
const ball = document.getElementById('ball1')

if (ball) {
  freeDrag({
    element: ball,
    leaveHandler(below) {
      below.style.background = 'white'
    },
    enterHandler(below) {
      below.style.background = 'rgba(255,0,0,0.5)'
    }
  })
}
// add
