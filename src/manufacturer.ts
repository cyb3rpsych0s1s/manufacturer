import { prop, arrayProp, getModelForClass } from '@typegoose/typegoose'
import { Activity } from './activity'
import * as activity from './activity'
import * as Joi from '@hapi/joi'
export class Manufacturer {
  constructor({ name, country, activities, background = undefined }) {
    const { error } = validator.validate({ name, country, activities, background })
    if (error) throw new Error(error)
    this.name = name
    this.country = country
    this.activities = activities // activities.map(s => activity.to(s))
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
export const from = (input : Manufacturer) : any => ({
  ...input,
  activities: input.activities.map(e => activity.from(e)),
})
export const to = (input : any) : Manufacturer => ({
  ...input,
  activities: input.activities.map(o => activity.to(o)),
})
export const validator = Joi.object({
  name: Joi.string().min(3).required(),
  country: Joi.string().pattern(/^[A-Z]{2}$/).required(),
  activities: Joi.array().items(activity.validator).min(1).required(),
  background: Joi.string().optional(),
})
export const ManufacturerModel = getModelForClass(Manufacturer)
