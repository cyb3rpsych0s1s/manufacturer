import manufacturers from './seeds/manufacturers'
import { Seeder } from 'mongo-seeding'
const config = {
  database: {
    host: '127.0.0.1',
    port: 27017,
    name: 'manufacturer',
  },
  dropDatabase: true,
}
const seeder = new Seeder(config)
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