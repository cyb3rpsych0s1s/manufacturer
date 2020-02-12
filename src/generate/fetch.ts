import * as request from 'request-promise-native'
import { debug } from '../logger'
let fetched
export default async () => {
  if (fetched) return fetched
  const url = 'http://cyberpunk.asia/corpo.php?lng=us'
  debug(`fetching ${url}`)
  fetched = request(url)
  .catch(console.error)
  return fetched
}