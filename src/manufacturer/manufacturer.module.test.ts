import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import { TypegooseModule } from 'nestjs-typegoose'
import * as request from 'supertest'
import { database_host, database_name, database_options, database_port } from '../environment'
import manufacturers from '../seeds/manufacturers'
import { ManufacturersModule } from './manufacturer.module'
const seal : any = {}
const setup = async () => {
  const reference = await Test.createTestingModule({
    imports: [
      TypegooseModule.forRoot(`mongodb://${database_host}:${database_port}/${database_name}`, database_options),
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
  return true
}
describe('manufacturers', () => {
  beforeAll(() => setup())
  afterAll(() => teardown())
  it(`/manufacturers (GET)`, () => request(seal.app.getHttpServer())
  .get('/manufacturers')
  .expect(200)
  .then(response => {
    expect(response.body).toEqual(expect.arrayContaining(manufacturers.map(manufacturer => expect.objectContaining(manufacturer))))
  }))
})