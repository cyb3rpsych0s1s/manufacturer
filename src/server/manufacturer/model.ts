import { arrayProp, prop } from '@typegoose/typegoose'
import { Activity } from '../activity'
import { validator } from './validator'
import { to } from '../activity'
interface Input {
  name : string
  country : string
  activities : string[]
  background? : string
}
export class Manufacturer {
  constructor(input? : Input) {
    if (!input) return
    const { name, country, activities, background = undefined } = input
    const { error } = validator.validate({ name, country, activities, background })
    if (error) throw new Error(error)
    this.name = name
    this.country = country
    this.activities = activities.map(to)
    if (background) this.background = background
  }
  @prop({ required: true, unique: true })
  name : string
  @prop({ required: true })
  country : string
  @arrayProp({ items: String, enum: Activity, required: true })
  activities : Activity[]
  @prop()
  background? : string
}
export const NAME = 'manufacturers'