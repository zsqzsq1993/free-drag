import { FreeDragConfig } from '../type'
import drag from './drag'

class FreeDrag {
  defaults: FreeDragConfig

  constructor(defaults: FreeDragConfig) {
    this.defaults = defaults
  }

  draggable(element: HTMLElement, config?: FreeDragConfig) {
    if (element instanceof HTMLElement) {
      if (!config) {
        config = {}
      }
      config.element = element
    } else {
      config = element
    }

    drag(config)
  }
}

export default FreeDrag
