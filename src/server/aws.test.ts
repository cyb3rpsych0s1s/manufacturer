import { mongoose } from '@typegoose/typegoose'
import * as path from 'path'
import { clean, _fetch } from './aws'
import environment from './environment'
import { seed } from './seeds'
import manufacturers from './seeds/manufacturers'
const dashedName = path.basename(__filename).replace(/\./g, '-')
const { database_host, database_port, database_name, database_options } = environment({
  database_name: dashedName
})
const setup = async () => {
  await seed(dashedName)
  return true
}
const teardown = async () => {
  await clean()
  await mongoose.connect(`mongodb://${database_host}:${database_port}/${dashedName}`, database_options)
  await mongoose.connection.db.dropDatabase()
  await mongoose.connection.close()
  return true
}
describe('aws', () => {
  beforeAll(() => setup())
  afterAll(() => teardown())
  it('fetch', async done => {
    const response : any = await _fetch()
    const outputs = JSON.parse(response.body)
    expect(outputs).toEqual(expect.arrayContaining(manufacturers.map(manufacturer => expect.objectContaining(manufacturer))))
    done()
  })
})