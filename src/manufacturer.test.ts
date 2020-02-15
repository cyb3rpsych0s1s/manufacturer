import { database_name, database_host, database_port, database_drop } from './environment'
import { Manufacturer, ManufacturerModel } from '.'
import manufacturers from './seeds/manufacturers'
import * as mongoose from 'mongoose'
const setup = async () => {
  await mongoose.connect(`mongodb://${database_host}:${database_port}`,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, dbName: database_name })
  return true
}
const teardown = async () => {
  if (database_drop) await mongoose.connection.db.dropDatabase()
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