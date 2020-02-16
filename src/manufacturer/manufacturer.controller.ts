import { Body, Controller, Get, Post, Param } from '@nestjs/common'
import { ManufacturerService } from './manufacturer.service'
import { Manufacturer } from './model'
@Controller('manufacturers')
export class ManufacturersController {
  constructor(private readonly service : ManufacturerService) {}

  @Get()
  async fetch() : Promise<Manufacturer[] | null> {
    return this.service.fetch()
  }

  @Get(':id')
  async find(@Param('id') id) : Promise<Manufacturer> {
    return this.service.find(id)
  }

  @Post()
  async insert(@Body() manufacturer : Manufacturer) : Promise<Manufacturer> {
    return this.service.create(manufacturer)
  }
}