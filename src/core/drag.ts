import { FreeDragConfig } from '../type'
import { getPositions } from '../helpers/position'
import { moveElement, normalizeElement } from './element'
import { processBelowElement } from './belowElement'

function drag(config: FreeDragConfig) {
  let { element, leaveHandler, enterHandler, draggableClassName } = config

  element!.ondragstart = () => false

  element!.onmousedown = element!.ontouchstart = function(downEvent: MouseEvent | TouchEvent) {
    const positions: any = getPositions(downEvent, element!)

    const processBelow = processBelowElement(element!)

    normalizeElement(element!)

    moveElement(config, downEvent, positions)

    addEventHandlers()

    function addEventHandlers() {
      document.onmouseup = document.ontouchend = function() {
        document.onmousemove = document.ontouchmove = null
        document.onmouseup = document.ontouchend = null
      }

      document.onmousemove = document.ontouchmove = function(moveEvent: MouseEvent | TouchEvent) {
        moveElement(config, moveEvent, positions)

        if (draggableClassName && (leaveHandler || enterHandler)) {
          processBelow(moveEvent, draggableClassName, enterHandler!, leaveHandler!)
        }
      }
    }
  }
}

export default drag
