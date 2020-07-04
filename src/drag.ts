import { freeDragConfig } from './type'
import { getPositions } from './helpers/position'
import { moveElement, normalizeElement } from './helpers/element'

function freeDrag(config: freeDragConfig) {
  const { element, leaveHandler, enterHandler, draggableClassName } = config

  element.ondragstart = () => false

  element.onmousedown = function(downEvent) {
    let currentBelow: any = null
    const positions: any = getPositions(downEvent, element)

    normalizeElement(element)

    moveElement(downEvent.pageX, downEvent.pageY, element, positions)

    document.addEventListener('mousemove', moveHandler, false)

    document.onmouseup = function() {
      document.removeEventListener('mousemove', moveHandler, false)
      document.onmouseup = null
    }

    function moveHandler(moveEvent: MouseEvent) {
      const { pageX, pageY } = moveEvent
      moveElement(moveEvent.pageX, moveEvent.pageY, element, positions)
      processBelowElement()

      function processBelowElement() {
        if (draggableClassName && (leaveHandler || enterHandler)) {
          element.hidden = true
          const belowElement = document.elementFromPoint(moveEvent.pageX, moveEvent.pageY)
          element.hidden = false
          let belowDraggable: any
          if (belowElement) {
            belowDraggable = belowElement.closest('.' + draggableClassName)
          }
          if (currentBelow !== belowDraggable) {
            if (currentBelow) {
              leaveHandler!(currentBelow)
            }
            currentBelow = belowDraggable
            if (currentBelow) {
              enterHandler!(currentBelow)
            }
          }
        }
      }
    }
  }
}

export default freeDrag
