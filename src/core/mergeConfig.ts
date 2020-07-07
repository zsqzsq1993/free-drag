import { FreeDragConfig } from '../type'

const customOnly: string[] = []

const strategies: any = (function() {
  const tempt = Object.create(null)
  customOnly.forEach(item => {
    tempt[item] = customStrategy
  })
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

export default mergeConfig
