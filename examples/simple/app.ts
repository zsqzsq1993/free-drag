import freedrag from "../../src"

const ball1 = document.getElementById('ball1')
const ball2 = document.getElementById('ball2')
const ball3 = document.getElementById('ball3')

if (
  !ball1 ||
  !ball2 ||
  !ball3) {
  throw new Error('One of balls does not exsist')
}

freedrag(ball1, {})

freedrag({
  element: ball2
})

freedrag.draggable({
  element: ball3
})
