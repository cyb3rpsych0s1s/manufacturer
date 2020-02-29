import { debug } from '../logger'
const axios = require('axios').default
let fetched
export default async () => {
  if (fetched) return fetched
  const url = 'http://cyberpunk.asia/corpo.php?lng=us'
  debug(`fetching ${url}`)
  fetched = await axios.get(url)
  .then(({ data }) => data)
  .catch(console.error)
  return fetched
}