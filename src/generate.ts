import * as fs from 'fs'
import * as path from 'path'
import * as request from 'request-promise-native'
import { load } from 'cheerio'
import { snakeCase } from 'voca'
import * as ejs from 'ejs'
const fetch = async () => request('http://cyberpunk.asia/corpo.php?lng=us')
.catch(console.error)
const parse = (html : string) : string[] => {
  const $ = load(html)
  const rows = []
  $('body')
  .find($('tbody'))
  .map((i, el) => {
    const row = $(el)
    .children().next().next()
    .find('td').next()
    .html()
    rows.push(row)
  })
  return rows
}
const reduce =rows => {
  return rows
  .reduce((activities : string[], row : string) => {
    const elements = row
    .split(',')
    .map(s => s.toLowerCase().trim())
    for (const element of elements) if (!activities.includes(element)) activities.push(element)
    return activities
  }, [])
  .sort()
}
const map = activities => {
  return activities
  .map(activity => ({ key: snakeCase(activity).toUpperCase(), value: activity }))
}
const write = (filename, content) => {
  fs.writeFileSync(path.join(__dirname, filename), content, { encoding: 'utf8' })
}

(async () => {
  try {
    const html = await fetch()
    const data = parse(html)
    const activities = reduce(data)
    // console.log(activities)
    const objects = map(activities)
    // console.log(objects)
    const rendered = await ejs.renderFile('./src/activities.ejs', { activities: objects })
    write('activities.ts', rendered)
  } catch(e) { console.error(e) }
})()
