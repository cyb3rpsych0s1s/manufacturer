import { Injectable } from '@nestjs/common'
import { ReturnModelType } from '@typegoose/typegoose'
import { InjectModel } from 'nestjs-typegoose'
import { Manufacturer } from './model'
@Injectable()
export class ManufacturerService {
  constructor(@InjectModel(Manufacturer) private readonly model : ReturnModelType<typeof Manufacturer>) {}
  async create(manufacturer : { name : string, country : string, activities : string[], background? : string }) : Promise<Manufacturer> {
    const entity = new this.model(manufacturer)
    return entity.save()
  }
  async fetch() : Promise<Manufacturer[] | null> {
    return this.model.find()
  }
  async find(id : string) : Promise<Manufacturer | null> {
    return this.model.findById(id)
  }
}