import { freeDragConfig } from '../type'
import { getPositions } from '../helpers/position'
import { moveElement, normalizeElement } from './element'
import { processBelowElement } from './belowElement'

function freeDrag(config: freeDragConfig) {
  const { element, leaveHandler, enterHandler, draggableClassName } = config

  element.ondragstart = () => false

  element.onmousedown = function(downEvent) {
    const positions: any = getPositions(downEvent, element)

    const processBelow = processBelowElement(element)

    normalizeElement(element)

    moveElement(downEvent, element, positions)

    document.addEventListener('mousemove', moveHandler, false)

    document.onmouseup = function() {
      document.removeEventListener('mousemove', moveHandler, false)
      document.onmouseup = null
    }

    function moveHandler(moveEvent: MouseEvent) {
      moveElement(moveEvent, element, positions)

      if (draggableClassName && (leaveHandler || enterHandler)) {
        processBelow(moveEvent, draggableClassName, enterHandler!, leaveHandler!)
      }
    }
  }
}

export default freeDrag
