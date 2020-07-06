export function numberize(str: string): number {
  return Number(str.split('px')[0])
}

export function retPosViaEvent(event: MouseEvent | TouchEvent) {
  if (event instanceof MouseEvent) {
    return event
  } else {
    return event.touches[0]
  }
}

export function extend<T, U>(to: T, from: U): T & U {
  for (let key in from) {
    const val = from[key]
    ;(to as T & U)[key] = val as any
  }
  return to as T & U
}
