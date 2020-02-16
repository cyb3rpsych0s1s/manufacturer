import { Manufacturer } from './model'
import manufacturers from '../seeds/manufacturers'
describe('ManufacturerModel', () => {
  for (const manufacturer of manufacturers) {
    it(`${manufacturer.name}`, () => {
      expect(() => new Manufacturer(manufacturer)).not.toThrow()
    })
  }
  it('should throw with malformed input', () => {
    expect(() => new Manufacturer({ name: 'a', country: 'UNKNOWN', activities: [], })).toThrow()
  })
})