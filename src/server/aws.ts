import { getModelForClass, mongoose } from '@typegoose/typegoose'
import middy from 'middy'
import { cors, doNotWaitForEmptyEventLoop, jsonBodyParser } from 'middy/middlewares'
import { Manufacturer } from './manufacturer'
import { connect } from './connect'

let connection
let model
const wire = async (name = undefined) => {
  if (!connection) {
    connection = await connect(name)
    model = getModelForClass(Manufacturer, { existingConnection: connection })
  }
  return model
}
export const clean = async () => {
  await mongoose.connection.close()
  model = undefined
  connection = undefined
}
export const fetch = async (name = undefined) => {
  const model = await wire(name)
  const manufacturers = await model.find().lean()
  return { statusCode: 200, body: JSON.stringify(manufacturers) }
}

export const handler = middy(fetch)
.use(jsonBodyParser())
.use(doNotWaitForEmptyEventLoop())
.use(cors())