import { freeDragConfig } from './type'

function freeDrag(config: freeDragConfig) {
  const { element, leaveHandler, enterHandler, draggableClassName } = config

  element.ondragstart = () => false

  element.onmousedown = function(downEvent) {
    let currentBelow: any = null
    const style = window.getComputedStyle(element)
    const marginLeft = numberize(style.marginLeft)
    const marginTop = numberize(style.marginTop)
    const paddingLeft = numberize(style.paddingLeft)
    const paddingTop = numberize(style.paddingTop)
    const paddingRight = numberize(style.paddingRight)
    const paddingBottom = numberize(style.paddingBottom)
    const offsetX = downEvent.clientX - element.getBoundingClientRect().left + marginLeft
    const offsetY = downEvent.clientY - element.getBoundingClientRect().top + marginTop
    const { innerHeight, innerWidth } = window
    const { offsetHeight, offsetWidth } = element
    normalizeElement()
    moveAt(downEvent.pageX, downEvent.pageY)

    document.addEventListener('mousemove', moveHandler, false)

    document.onmouseup = function() {
      document.removeEventListener('mousemove', moveHandler, false)
      document.onmouseup = null
    }

    function normalizeElement() {
      element.style.position = 'fixed'
      element.style.zIndex = '1000'
      element.style.cursor = 'pointer'
    }

    function numberize(str: string): number {
      return Number(str.split('px')[0])
    }

    function moveAt(pageX: number, pageY: number) {
      const x = Math.min(
        Math.max(0 - paddingLeft - marginLeft, pageX - offsetX),
        innerWidth - offsetWidth + paddingRight - marginLeft
      )
      const y = Math.min(
        Math.max(0 - paddingTop - marginTop, pageY - offsetY),
        innerHeight - offsetHeight + paddingBottom - marginTop
      )
      element.style.left = x + 'px'
      element.style.top = y + 'px'
    }

    function moveHandler(moveEvent: MouseEvent) {
      const { pageX, pageY } = moveEvent
      moveAt(pageX, pageY)
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
