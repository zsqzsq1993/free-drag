import freedrag from "../../src"

(function () {
  const ball = document.getElementById('ball')
  freedrag(ball!, {
    moveHandler: {
      onMoveInterval: 1000,
      onMoveStart() {
        console.log('move start')
      },
      onMoveEnd() {
        console.log('move end')
      },
      onMove: (function () {
        let i = 0
        return function () {
          console.log(i++)
        }
      })()
    }
  })
})()
