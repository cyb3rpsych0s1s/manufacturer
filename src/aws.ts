import middy from 'middy'
import { jsonBodyParser, cors, doNotWaitForEmptyEventLoop } from 'middy/middlewares'
import { database_host, database_options, database_port, database_name } from './environment'
import { getModelForClass, mongoose } from '@typegoose/typegoose'
import { Manufacturer } from './manufacturer'
let connection
let model
const connect = async (name = undefined) => {
  if (!connection) {
    connection = await mongoose.connect(`mongodb://${database_host}:${database_port}/${name ? name : database_name}`, database_options)
    model = getModelForClass(Manufacturer, { existingConnection: connection })
  }
  return model
}
export const clean = async () => {
  await mongoose.connection.close()
  model = undefined
  connection = undefined
}
export const _fetch = async (name = undefined) => {
  const model = await connect(name)
  const manufacturers = await model.find().lean()
  return { statusCode: 200, body: JSON.stringify(manufacturers) }
}

export const fetch = middy(_fetch)
.use(jsonBodyParser())
.use(doNotWaitForEmptyEventLoop())
.use(cors())