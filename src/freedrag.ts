import { FreeDragConfig, FreeDragInstance } from './type'
import FreeDrag from './core/FreeDrag'
import { extend } from './helpers/utils'
import defaultConfig from './defaults/defaultConfig'

function createInstance(config: FreeDragConfig): FreeDragInstance {
  const context = new FreeDrag(config)
  let instance = FreeDrag.prototype.draggable.bind(context) // important这样this.defaults才会被正确调用
  instance = extend(instance, context)
  return instance as FreeDragInstance
}

const freedrag = createInstance(defaultConfig)

export default freedrag
