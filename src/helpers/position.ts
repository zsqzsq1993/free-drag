import { numberize, retPosViaEvent } from './utils'

export function getEleMarginAndPadding(element: HTMLElement): any {
  const style: any = window.getComputedStyle(element)
  let styleObjs: any = {}
  for (let dir of ['Left', 'Right', 'Top', 'Bottom']) {
    for (let gap of ['margin', 'padding']) {
      styleObjs[gap + dir] = numberize(style[gap + dir])
    }
  }
  return styleObjs
}

export function getPositions(event: MouseEvent | TouchEvent, element: HTMLElement): any {
  const {
    marginLeft,
    marginTop,
    paddingLeft,
    paddingTop,
    paddingRight,
    paddingBottom
  } = getEleMarginAndPadding(element)
  const { clientX, clientY } = retPosViaEvent(event)
  const offsetX = clientX - element.getBoundingClientRect().left + marginLeft
  const offsetY = clientY - element.getBoundingClientRect().top + marginTop
  const { innerHeight, innerWidth } = window
  const { offsetHeight, offsetWidth } = element
  return {
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
  }
}
