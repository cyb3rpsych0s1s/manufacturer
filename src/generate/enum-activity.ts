import * as fs from 'fs'
import * as path from 'path'
import { load } from 'cheerio'
import { snakeCase } from 'voca'
import * as ejs from 'ejs'
import fetch from './fetch'
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
  fs.writeFileSync(path.join(__dirname, '..', filename), content, { encoding: 'utf8' })
}

export default async () => {
  try {
    const html = await fetch()
    const data = parse(html)
    const activities = reduce(data)
    const objects = map(activities)
    const rendered = await ejs.renderFile(path.join(__dirname, 'enum-activity.ejs'), { activities: objects })
    write('activity.ts', rendered)
  } catch(e) { console.error(e) }
}
