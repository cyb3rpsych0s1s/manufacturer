import { Activity, from, to } from './activity'
describe('activity', () => {
  it('from', () => {
    expect(from(Activity.ACPA)).toBe('acpa')
  })
  it('to', () => {
    expect(to('acpa')).toBe(Activity.ACPA)
    expect(to('unknown')).toBe(undefined)
  })
})
