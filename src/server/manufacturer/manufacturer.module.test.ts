import { Test } from '@nestjs/testing'
import { mongoose } from '@typegoose/typegoose'
import { TypegooseModule } from 'nestjs-typegoose'
import * as path from 'path'
import request from 'supertest'
import { seed } from '../seeds'
import manufacturers from '../seeds/manufacturers'
import environment from '../environment'
import { ManufacturersModule } from './manufacturer.module'
const dashedName = path.basename(__filename).replace(/\./g, '-')
const { database_host, database_options, database_port, database_name } = environment({
  database_name: dashedName
})
const seal : any = {}
const setup = async () => {
  await seed(dashedName)
  const reference = await Test.createTestingModule({
    imports: [
      TypegooseModule.forRoot(`mongodb://${database_host}:${database_port}/${dashedName}`, database_options),
      ManufacturersModule
    ],
  }).compile()
  seal.app = reference.createNestApplication()
  await seal.app.init()
  return true
}
const teardown = async () => {
  await seal.app.close()
  seal.app = undefined
  await mongoose.connect(`mongodb://${database_host}:${database_port}/${dashedName}`, database_options)
  await mongoose.connection.db.dropDatabase()
  await mongoose.connection.close()
  return true
}
describe('manufacturers', () => {
  let _id
  beforeAll(() => setup())
  afterAll(() => teardown())
  it(`/manufacturers (GET)`, async done => {
    const response = await request(seal.app.getHttpServer())
    .get('/manufacturers')
    _id = response.body.find(({ name }) => name === 'Arasaka')._id
  
    expect(response.status).toBe(200)
    expect(response.body).toEqual(expect.arrayContaining(manufacturers.map(manufacturer => expect.objectContaining(manufacturer))))
    done()
  })
  it(`/manufacturers/:id (GET)`, async done => {
    const response = await request(seal.app.getHttpServer())
    .get(`/manufacturers/${_id}`)
  
    expect(response.status).toBe(200)
    expect(response.body).toEqual(expect.objectContaining(manufacturers.find(manufacturer => manufacturer.name === 'Arasaka')))
    done()
  })
})