import draggable from "../../src"

const ball = document.getElementById('ball')
if (ball) {
  draggable({
    element: ball
  })
}
