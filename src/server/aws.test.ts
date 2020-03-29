import { mongoose } from '@typegoose/typegoose'
import * as path from 'path'
import { clean, fetch } from './aws'
import { connect } from './connect'
import { seed } from './seeds'
import manufacturers from './seeds/manufacturers'
const dashedName = path.basename(__filename).replace(/\./g, '-')
const setup = async () => {
  await seed(dashedName)
  return true
}
const teardown = async () => {
  await clean()
  await connect(dashedName)
  await mongoose.connection.db.dropDatabase()
  await mongoose.connection.close()
  return true
}
describe('aws', () => {
  beforeAll(async () => await setup())
  afterAll(async () => await teardown())
  it('fetch', async done => {
    const response : any = await fetch(dashedName)
    const outputs = JSON.parse(response.body)
    expect(outputs).toEqual(expect.arrayContaining(manufacturers.map(manufacturer => expect.objectContaining(manufacturer))))
    done()
  })
})