import { Activity } from './activity'
import * as activity from './activity'
import * as Joi from '@hapi/joi'
export interface Manufacturer {
  name : string
  country : string
  activities : Activity[]
}
export const from = (input : Manufacturer) : any => ({
  name: input.name,
  country: input.country,
  activities: input.activities.map(e => activity.from(e))
})
export const to = (input : any) : Manufacturer => ({
  name: input.name,
  country: input.country,
  activities: input.activities.map(o => activity.to(o))
})
export const validator = Joi.object({
  name: Joi.string().min(3).required(),
  country: Joi.string().pattern(/^[A-Z]{2}$/).required(),
  activities: Joi.array().items(activity.validator).min(1).required(),
})
