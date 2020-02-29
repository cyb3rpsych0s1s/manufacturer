require('dotenv').config()
const yn = require('yn')
const R = require('ramda')
const database_name = process.env.DATABASE_NAME || 'test'
const database_host = process.env.DATABASE_HOST || 'localhost'
const database_port = +process.env.DATABASE_HOST || 27017
const database_options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}
const database_drop = yn(process.env.DATABASE_DROP, { default: process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'test' })
const server_host = process.env.SERVER_HOST || 'localhost'
const server_port = +process.env.SERVER_PORT || 3000
interface Options {
  database_name? : string
  database_host? : string
  database_port? : number
  database_options? : object
  database_drop? : boolean
  server_host? : string
  server_port? : number
}
export default (options? : Options) => ({
  database_name: R.pathOr(database_name, ['database_name'], options),
  database_host: R.pathOr(database_host, ['database_host'], options),
  database_port: R.pathOr(database_port, ['database_port'], options),
  database_options: R.pathOr(database_options, ['database_options'], options),
  database_drop: R.pathOr(database_drop, ['database_drop'], options),
  server_host: R.pathOr(server_host, ['server_host'], options),
  server_port: R.pathOr(server_port, ['server_port'], options),
})