export function numberize(str: string): number {
  return Number(str.split('px')[0])
}
