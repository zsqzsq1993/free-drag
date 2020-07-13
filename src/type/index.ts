export interface FreeDragConfig {
  element?: HTMLElement
  leaveHandler?: PassHandler
  enterHandler?: PassHandler
  draggableClassName?: string
  onlyHorizontalMove?: boolean
  onlyVerticalMove?: boolean
  boundary?: any

  [key: string]: any
}

export interface PassHandler {
  (belowElement: HTMLElement): void
}

export interface FreeDrag {
  draggable(config: FreeDragConfig): void
  undraggable(element: HTMLElement): void
}

export interface FreeDragInstance extends FreeDrag {
  (element: HTMLElement, config?: FreeDragConfig): void
  (config: FreeDragConfig): void
}
