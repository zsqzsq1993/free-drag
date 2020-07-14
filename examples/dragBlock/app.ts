import freedrag from "../../src"
import {PassHandler} from "../../src/type"

(function () {
  const wrapper = document.getElementsByClassName('blocks-wrapper')[0]
  const blocks = document.getElementsByClassName('block')

  const onMoveStart = function (event: MouseEvent | TouchEvent): void {
    (event.target as any).style.border = '2px solid black'
  }

  const onMoveEnd = function (event: MouseEvent | TouchEvent) {
    const style = (event.target as any).style
    style.position = ''
  }

  const leaveHandler = function (below: HTMLElement, element: HTMLElement) {
    return
  }

  const enterHandler = function (below: HTMLElement, element: HTMLElement) {
    const belowParent = below.parentNode
    const elementParent = element.parentNode
    belowParent!.appendChild(element)
    elementParent!.appendChild(below)
  }

  Array.prototype.forEach.call(blocks, item => {
    freedrag(item, {
      boundary: wrapper.getBoundingClientRect(),
      onlyVerticalMove: true,
      enterHandler,
      leaveHandler,
      moveHandler: {
        onMoveStart,
        onMoveEnd
      }
    })
  })
})()
