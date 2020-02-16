import { Module } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { TypegooseModule } from 'nestjs-typegoose'
import { database_host, database_name, database_options, database_port, server_host, server_port } from './environment'
import { ManufacturersModule } from './manufacturer'
@Module({
  imports: [
    TypegooseModule.forRoot(`mongodb://${database_host}:${database_port}/${database_name}`, database_options),
    ManufacturersModule
  ]
})
class AppModule {}
const init = async () => NestFactory.create<NestExpressApplication>(AppModule)
const bootstrap = async () => {
  const app = await init()
  await app.listen(server_port, server_host)
}
bootstrap()