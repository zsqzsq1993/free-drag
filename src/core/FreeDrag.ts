import { FreeDragConfig } from '../type'
import drag from './drag'
import mergeConfig from './mergeConfig'

class FreeDrag {
  defaults: FreeDragConfig

  constructor(defaults: FreeDragConfig) {
    this.defaults = defaults
  }

  draggable(element: HTMLElement, config?: FreeDragConfig): void {
    if (element instanceof HTMLElement) {
      if (!config) {
        config = {}
      }
      config.element = element
    } else {
      config = element
    }

    config = mergeConfig(this.defaults, config)

    drag(config)
  }

  undraggable(element: HTMLElement): void {
    element.style.cursor = 'auto'
    element.onmousedown = element.ontouchstart = null
    document.onmousemove = document.ontouchmove = null
    document.onmouseup = document.ontouchend = null
  }
}

export default FreeDrag
