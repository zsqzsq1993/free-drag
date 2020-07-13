import freedrag from "../../src"

(function () {
  const ball = document.getElementById('ball')
  const button = document.getElementById('undraggable')
  button!.addEventListener('click', () => {
    freedrag.undraggable(ball!)
  })
  if (ball) {
    freedrag(ball)
  }
})()
