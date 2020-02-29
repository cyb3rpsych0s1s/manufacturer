import { Seeder } from 'mongo-seeding'
import { SeederDatabaseConfig } from 'mongo-seeding/dist/database'
import { NAME } from '..'
import { warn } from '../logger'
import environment from '../environment'
import manufacturers from './manufacturers'
export const seed = async (name = undefined) => {
  const { database_host, database_drop, database_port, database_name } = environment({ database_name: name })
  warn(`seed ${database_host}:${database_port}/${database_name} (${database_drop ? '' : 'no '}drop)`)
  const config : SeederDatabaseConfig = {
    protocol: 'mongodb',
    name: database_name,
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
