import { PassHandler } from '../type'

export function processBelowElement(element: HTMLElement) {
  let currentBelow: any = null

  return function(
    event: MouseEvent,
    className: string,
    enterHandler: PassHandler,
    leaveHandler: PassHandler
  ) {
    element.hidden = true
    const belowElement = document.elementFromPoint(event.pageX, event.pageY)
    element.hidden = false
    let belowDraggable: any
    if (belowElement) {
      belowDraggable = belowElement.closest('.' + className)
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
