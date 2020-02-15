import { Manufacturer, ManufacturerModel } from './manufacturer'
import manufacturers from './seeds/manufacturers'
import * as mongoose from 'mongoose'
const setup = async () => {
  await mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'test' })
  return true
}
const teardown = async () => {
  await mongoose.connection.db.dropDatabase()
  await mongoose.connection.close()
  return true
}
describe('manufacturer entities', () => {
  beforeAll(() => setup())
  afterAll(() => teardown())
  describe('create', () => {
    const entities = []
    for (const manufacturer of manufacturers) {
      entities.push(new Manufacturer(manufacturer))
    }
    it(`insertMany`, () => {
      return expect(ManufacturerModel.insertMany(entities)).resolves.not.toThrow()
    })
    it(`find`, async () => {
      await expect(ManufacturerModel.find()).resolves.toHaveLength(manufacturers.length)
    })
  })
})