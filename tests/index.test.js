import { it, expect, vi } from 'vitest'
import { getUnixTime } from '../src'

// Little test unit
it('gets unix timestamp', () => {
  // on fige le temps à la date voulu pour le test
  vi.setSystemTime('2020-01-01')
  expect(getUnixTime()).toStrictEqual(1577836800)
  // on rétablis le temps
  vi.useRealTimers()
})
