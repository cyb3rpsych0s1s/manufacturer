import { mongoose } from '@typegoose/typegoose'
import environment from './environment'
export const connect = async (name = undefined) => {
  const { database_host, database_port, database_name, database_options } = environment({ database_name: name })
  return await mongoose.connect(`mongodb://${database_host}:${database_port}/${database_name}`, database_options)
}