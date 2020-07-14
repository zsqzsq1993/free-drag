import { retPosViaEvent } from '../helpers/utils'
import { FreeDragConfig } from '../type'

export function normalizeElement(element: HTMLElement) {
  element.style.position = 'fixed'
  element.style.zIndex = '1000'
  element.style.cursor = 'pointer'
}

export function moveElement(
  config: FreeDragConfig,
  event: MouseEvent | TouchEvent,
  positions: any
) {
  const {
    marginLeft,
    marginTop,
    paddingLeft,
    paddingTop,
    paddingRight,
    paddingBottom,
    offsetX,
    offsetY,
    offsetHeight,
    offsetWidth
  } = positions
  const { element, onlyHorizontalMove, onlyVerticalMove, boundary } = config
  const { left, right, top, bottom } = boundary
  const { pageX, pageY } = retPosViaEvent(event)

  if (onlyHorizontalMove && onlyVerticalMove) {
    console.warn('Do not suggest limit movement on both horizontal and vertical direction.')
  }

  const x = onlyVerticalMove
    ? ''
    : Math.min(
        Math.max(left - paddingLeft - marginLeft, pageX - offsetX),
        right - offsetWidth + paddingRight - marginLeft
      )
  const y = onlyHorizontalMove
    ? ''
    : Math.min(
        Math.max(top - paddingTop - marginTop, pageY - offsetY),
        bottom - offsetHeight + paddingBottom - marginTop
      )
  if (x) {
    element!.style.left = x + 'px'
  }
  if (y) {
    element!.style.top = y + 'px'
  }
}
