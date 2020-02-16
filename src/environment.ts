require('dotenv').config()
const yn = require('yn')
export const database_name = process.env.DATABASE_NAME || 'test'
export const database_host = process.env.DATABASE_HOST || 'localhost'
export const database_port = +process.env.DATABASE_HOST || 27017
export const database_options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}
export const database_drop = yn(process.env.DATABASE_DROP, { default: process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'test' })
export const server_host = process.env.SERVER_HOST || 'localhost'
export const server_port = +process.env.SERVER_PORT || 3000
