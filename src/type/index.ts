export interface freeDragConfig {
  element: HTMLElement
  leaveHandler?: PassHandler
  enterHandler?: PassHandler
  draggableClassName?: string
}

export interface PassHandler {
  (belowElement: HTMLElement): void
}
