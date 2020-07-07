import freedrag from "../../src"

const ball1 = document.getElementById('ball1')
const ball2 = document.getElementById('ball2')

if (!ball1 || !ball2) {
  throw new Error('One of balls does not exsist')
}

freedrag(ball1, {
  onlyVerticalMove: true,
})

freedrag(ball2, {
  onlyHorizontalMove: true
})
