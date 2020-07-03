import freeDrag from "../../src"
const ball = document.getElementById('ball')

if (ball) {
  freeDrag({
    element: ball,
    draggableClassName: 'draggable',
    leaveHandler(below) {
      below.style.background = 'white'
    },
    enterHandler(below) {
      below.style.background = 'rgba(255,0,0,0.5)'
    }
  })
}
