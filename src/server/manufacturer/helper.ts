import { Manufacturer } from './model'
import * as activity from '../activity'

export const from = (input : Manufacturer) : any => ({
  ...input,
  activities: input.activities.map(e => activity.from(e)),
})
export const to = (input : any) : Manufacturer => ({
  ...input,
  activities: input.activities.map(o => activity.to(o)),
})