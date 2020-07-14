import { PassHandler } from '../type'
import { retPosViaEvent } from '../helpers/utils'

export function processBelowElement(element: HTMLElement) {
  let currentBelow: any = null

  return function(
    event: MouseEvent | TouchEvent,
    className: string,
    enterHandler: PassHandler,
    leaveHandler: PassHandler
  ) {
    element.hidden = true
    const { pageX, pageY } = retPosViaEvent(event)
    const belowElement = document.elementFromPoint(pageX, pageY)
    element.hidden = false
    let belowDraggable: any
    if (belowElement) {
      belowDraggable = belowElement.closest('.' + className)
    }
    if (currentBelow !== belowDraggable) {
      if (currentBelow) {
        leaveHandler(currentBelow, element)
      }
      currentBelow = belowDraggable
      if (currentBelow) {
        enterHandler(currentBelow, element)
      }
    }
  }
}
