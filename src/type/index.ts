export interface FreeDragConfig {
  element?: HTMLElement
  leaveHandler?: PassHandler
  enterHandler?: PassHandler
  draggableClassName?: string
}

export interface PassHandler {
  (belowElement: HTMLElement): void
}

export interface FreeDrag {
  draggable(config: FreeDragConfig): void
}

export interface FreeDragInstance extends FreeDrag {
  (element: HTMLElement, config?: FreeDragConfig): void
  (config: FreeDragConfig): void
}
