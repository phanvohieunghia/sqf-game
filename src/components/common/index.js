export function randomPrice() {
  return Math.floor(Math.random() * (50000 - 20000) + 20000)
}
export function handleTokenString(token) {
  let result = ''
  result += token.slice(0, 5)
  result += '...'
  result += token.slice(-3)
  return result
}
export function handleTokenAddressString(address) {
  let result = 'sqfgame.com/'
  result += address.slice(0, 5)
  result += '...'
  result += address.slice(-3)
  return result
}
