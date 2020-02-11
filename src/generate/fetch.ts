import * as request from 'request-promise-native'
let fetched
export default async () => {
  if (fetched) return fetched
  fetched = request('http://cyberpunk.asia/corpo.php?lng=us')
  .catch(console.error)
  return fetched
}