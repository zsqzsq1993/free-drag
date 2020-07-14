import any = jasmine.any

export function processStart(moveHandler: any, event: MouseEvent | TouchEvent): void {
  if (moveHandler && moveHandler.onMoveStart) {
    moveHandler.onMoveStart(event)
  }
}

export function processEnd(moveHandler: any, event: MouseEvent | TouchEvent): void {
  if (moveHandler && moveHandler.onMoveEnd) {
    processMove(null, new MouseEvent('click'), true)
    moveHandler.onMoveEnd(event)
  }
}

export let processMove = (function() {
  let firstTime = true
  let timer: any = null
  let finish = false
  return function(moveHandler: any, event: MouseEvent | TouchEvent, done?: boolean): void {
    if (done) {
      finish = done
    }
    if (moveHandler && moveHandler.onMove) {
      const interval = moveHandler.onMoveInterval || 200
      if (firstTime) {
        firstTime = false
        moveHandler.onMove(event)
      }
      if (timer) {
        return
      }
      timer = setTimeout(() => {
        timer = null
        if (!finish) {
          moveHandler.onMove(event)
        } else {
          finish = false
        }
      }, interval)
    }
  }
})()
