import { Module } from '@nestjs/common'
import { TypegooseModule } from 'nestjs-typegoose'
import { ManufacturersController } from './manufacturer.controller'
import { ManufacturerService } from './manufacturer.service'
import { Manufacturer, NAME } from './model'
import { database_options } from '../environment'
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