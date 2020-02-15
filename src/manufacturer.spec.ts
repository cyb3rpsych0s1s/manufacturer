import { Manufacturer, ManufacturerModel } from './manufacturer'
import manufacturers from './seeds/manufacturers'
import * as mongoose from 'mongoose'
describe('manufacturer', () => {
  const entities = []
  for (const manufacturer of manufacturers) {
    it(`${manufacturer.name}`, () => {
      expect(() => entities.push(new Manufacturer(manufacturer))).not.toThrow()
    })
  }
  it('should throw with malformed input', () => {
    expect(() => new Manufacturer({ name: 'a', country: 'UNKNOWN', activities: [], })).toThrow()
  })
})