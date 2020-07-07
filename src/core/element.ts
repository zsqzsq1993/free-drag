import { retPosViaEvent } from '../helpers/utils'

export function normalizeElement(element: HTMLElement) {
  element.style.position = 'fixed'
  element.style.zIndex = '1000'
  element.style.cursor = 'pointer'
}

export function moveElement(
  event: MouseEvent | TouchEvent,
  element: HTMLElement,
  positions: any,
  onlyHorizontalMove: boolean,
  onlyVerticalMove: boolean
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
    innerHeight,
    innerWidth,
    offsetHeight,
    offsetWidth
  } = positions
  const { pageX, pageY } = retPosViaEvent(event)

  if (onlyHorizontalMove && onlyVerticalMove) {
    console.warn('Do not suggest limit movement on both horizontal and vertical direction.')
  }

  const x = onlyVerticalMove
    ? ''
    : Math.min(
        Math.max(0 - paddingLeft - marginLeft, pageX - offsetX),
        innerWidth - offsetWidth + paddingRight - marginLeft
      )
  const y = onlyHorizontalMove
    ? ''
    : Math.min(
        Math.max(0 - paddingTop - marginTop, pageY - offsetY),
        innerHeight - offsetHeight + paddingBottom - marginTop
      )
  if (x) {
    element.style.left = x + 'px'
  }
  if (y) {
    element.style.top = y + 'px'
  }
}
