import { Module } from '@nestjs/common'
import { TypegooseModule } from 'nestjs-typegoose'
import environment from '../environment'
import { ManufacturersController } from './manufacturer.controller'
import { ManufacturerService } from './manufacturer.service'
import { Manufacturer, NAME } from './model'
const { database_options } = environment()
@Module({
  imports: [TypegooseModule.forFeature([{
    typegooseClass: Manufacturer,
    schemaOptions: {
      collection: NAME
    }
  }], database_options.hasOwnProperty('connectionName') ? database_options['connectionName'] : undefined)],
  controllers: [ManufacturersController],
  providers: [ManufacturerService],
})
export class ManufacturersModule {}