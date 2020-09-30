import { FreeDragConfig } from '../type'

const customOnly: string[] = []

const strategies: any = (function() {
  const tempt = Object.create(null)
  customOnly.forEach(item => {
    tempt[item] = customStrategy
  })
  tempt.boundary = boundaryStrategy
  return tempt
})()

function mergeConfig(defaultConfig: FreeDragConfig, customConfig: FreeDragConfig): FreeDragConfig {
  const config = Object.create(null)

  if (!customConfig) {
    customConfig = {}
  }

  Object.keys(customConfig).forEach(key => {
    config[key] = merge(key)
  })

  Object.keys(defaultConfig).forEach(key => {
    if (typeof customConfig[key] === 'undefined') {
      config[key] = merge(key)
    }
  })

  return config

  function merge(key: string) {
    const strategy = strategies[key] || defaultStrategy
    const defaultVal = defaultConfig[key]
    const customVal = customConfig[key]
    return strategy(defaultVal, customVal)
  }
}

function customStrategy(defaultVal: any, customVal: any) {
  if (typeof customVal === 'undefined') {
    throw new Error('Use custom only merging strategy but value is undefined.')
  } else {
    return customVal
  }
}

function defaultStrategy(defaultVal: any, customVal: any) {
  if (typeof customVal === 'undefined') {
    return defaultVal
  } else {
    return customVal
  }
}

function boundaryStrategy(defaultVal: any, customVal: any) {
  const keys = ['left', 'top', 'right', 'bottom']

  const obj = Object.create(null)

  if (!customVal) {
    customVal = Object.create(null)
  }
  keys.forEach(key => {
    const cus = customVal[key]
    const def = defaultVal[key]
    if (typeof cus === 'number') {
      obj[key] = cus
    } else if (typeof def === 'number') {
      obj[key] = def
    }
  })
  return obj
}

export default mergeConfig
