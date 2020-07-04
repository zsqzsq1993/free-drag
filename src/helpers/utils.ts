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
