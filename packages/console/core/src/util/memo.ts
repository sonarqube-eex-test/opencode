export function memo<T>(fn: () => T, cleanup?: (input: T) => Promise<void>) {
  let value: T
  let loaded = false

  const result = (): T => {
    if (!loaded) {
      loaded = true
      value = fn()
    }
    return value
  }
  result.reset = async () => {
    if (cleanup && loaded) await cleanup(value)
    loaded = false
  }

  return result
}
