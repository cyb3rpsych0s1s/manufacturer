import { Seeder } from 'mongo-seeding'
import { SeederDatabaseConfig } from 'mongo-seeding/dist/database'
import { database_name, database_host, database_port, database_drop } from './environment'
import manufacturers from './seeds/manufacturers'
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
const run = async () => {
  try {
    await seeder.import([
      {
        name: 'manufacturer',
        documents: manufacturers,
      }
    ])
  } catch (e) { console.error(e) }
}
run()