import { getModelForClass, mongoose } from '@typegoose/typegoose'
import middy from 'middy'
import { cors, doNotWaitForEmptyEventLoop, jsonBodyParser } from 'middy/middlewares'
import environment from './environment'
import { Manufacturer } from './manufacturer'
const { database_host, database_options, database_port, database_name } = environment()
let connection
let model
const connect = async (name = undefined) => {
  if (!connection) {
    connection = await mongoose.connect(`mongodb://${database_host}:${database_port}/${database_name}`, database_options)
    model = getModelForClass(Manufacturer, { existingConnection: connection })
  }
  return model
}
export const clean = async () => {
  await mongoose.connection.close()
  model = undefined
  connection = undefined
}
export const _fetch = async () => {
  const model = await connect()
  const manufacturers = await model.find().lean()
  return { statusCode: 200, body: JSON.stringify(manufacturers) }
}

export const fetch = middy(_fetch)
.use(jsonBodyParser())
.use(doNotWaitForEmptyEventLoop())
.use(cors())