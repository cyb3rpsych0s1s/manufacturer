import manufacturers from './manufacturers'
import { validator } from '../manufacturer'
describe('manufacturers', () => {
  for (const manufacturer of manufacturers) {
    it(manufacturer.name, () => {
      expect(validator.validate(manufacturer)).not.toHaveProperty('error')
    })
  }
})