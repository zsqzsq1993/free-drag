import { freeDragConfig } from './type'

function draggable(config: freeDragConfig) {
  const { element } = config

  element.ondragstart = () => false

  element.onmousedown = function(downEvent) {
    const { offsetX, offsetY } = getOffset(downEvent)

    element.style.position = 'absolute'
    element.style.zIndex = '1000'

    document.addEventListener('mousemove', moveAt, false)

    element.onmouseup = function() {
      document.removeEventListener('mousemove', moveAt, false)
      element.onmouseup = null
    }

    function getOffset(event: MouseEvent) {
      const { pageX, pageY } = event
      const { top, left } = element.getBoundingClientRect()
      const offsetX = pageX - left
      const offsetY = pageY - top
      return {
        offsetX,
        offsetY
      }
    }

    function moveAt(event: MouseEvent) {
      const { pageX, pageY } = event
      const { innerHeight, innerWidth } = window
      const { offsetHeight, offsetWidth } = element
      const { top, bottom, left, right } = element.getBoundingClientRect()

      const x = Math.min(Math.max(0, pageX - offsetX), innerWidth - offsetWidth)
      const y = Math.min(Math.max(0, pageY - offsetY), innerHeight - offsetHeight)
      element.style.left = x + 'px'
      element.style.top = y + 'px'

      if (pageX <= 0 || pageX >= innerWidth || pageY <= 0 || pageY >= innerHeight) {
        element.dispatchEvent(new Event('mouseup'))
      }
    }
  }
}

export default draggable
