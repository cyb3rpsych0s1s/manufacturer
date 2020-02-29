import { getModelForClass, mongoose } from '@typegoose/typegoose'
import * as path from 'path'
import environment from '../environment'
import manufacturers from '../seeds/manufacturers'
import { Manufacturer } from './model'
const { database_host, database_options, database_port, database_name } = environment({
  database_name: path.basename(__filename).replace(/\./g, '-')
})
const seal : any = {}
const setup = async () => {
  await mongoose.connect(`mongodb://${database_host}:${database_port}/${database_name}`, database_options)
  seal.model = getModelForClass(Manufacturer)
  return true
}
const teardown = async () => {
  seal.model = undefined
  await mongoose.connection.db.dropDatabase()
  await mongoose.connection.close()
  return true
}
describe('model', () => {
  let _id
  beforeAll(() => setup())
  afterAll(() => teardown())
  it(`create`, async () => {
    const created = await seal.model.create(manufacturers[0] as Manufacturer)
    _id = created._id
    return expect(_id).toBeDefined()
  })
  it(`findById`, async () => {
    const manufacturer = await seal.model.findById(_id).lean()
    return expect(manufacturer).toEqual(expect.objectContaining(manufacturers[0]))
  })
})