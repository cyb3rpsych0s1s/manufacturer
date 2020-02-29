import * as Joi from '@hapi/joi'
import * as activity from '../activity'
export const validator = Joi.object({
  name: Joi.string().min(3).required(),
  country: Joi.string().pattern(/^[A-Z]{2}$/).required(),
  activities: Joi.array().items(activity.validator).min(1).required(),
  background: Joi.string().optional(),
})