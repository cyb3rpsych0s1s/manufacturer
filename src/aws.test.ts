import { _fetch, clean } from './aws'
import manufacturers from './seeds/manufacturers'
import { mongoose } from '@typegoose/typegoose'
import { database_host, database_options, database_port } from './environment'
import { seed } from './seeds'
import * as path from 'path'
const dashedName = path.basename(__filename).replace(/\./g, '-')
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
    const response : any = await _fetch(dashedName)
    const outputs = JSON.parse(response.body)
    expect(outputs).toEqual(expect.arrayContaining(manufacturers.map(manufacturer => expect.objectContaining(manufacturer))))
    done()
  })
})