export function normalizeElement(element: HTMLElement) {
  element.style.position = 'fixed'
  element.style.zIndex = '1000'
  element.style.cursor = 'pointer'
}

export function moveElement(pageX: number, pageY: number, element: HTMLElement, positions: any) {
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
