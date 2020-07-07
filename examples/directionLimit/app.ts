import freedrag from "../../src"

const ball1 = document.getElementById('ball1')

if (!ball1) {
  throw new Error('One of balls does not exsist')
}

freedrag(ball1, {
  onlyVerticalMove: true,
  onlyHorizontalMove: true
})
