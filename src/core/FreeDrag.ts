import { FreeDragConfig } from '../type'
import drag from './drag'
import mergeConfig from './mergeConfig'

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

    config = mergeConfig(this.defaults, config)

    drag(config)
  }
}

export default FreeDrag
