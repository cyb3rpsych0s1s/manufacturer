import { Seeder } from 'mongo-seeding'
import { SeederDatabaseConfig } from 'mongo-seeding/dist/database'
import { NAME } from '..'
import { database_drop, database_host, database_name, database_port } from '../environment'
import manufacturers from './manufacturers'
export const seed = async (name = undefined) => {
  const config : SeederDatabaseConfig = {
    protocol: 'mongodb',
    name: name
    ? name
    : database_name,
    host: database_host,
    port: database_port,
  }
  const seeder = new Seeder({
    database: config,
    dropDatabase: database_drop
  })
  try {
    await seeder.import([
      {
        name: NAME,
        documents: manufacturers.sort(),
      }
    ])
  } catch (e) { console.error(e) }
}
