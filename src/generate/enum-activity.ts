import * as fs from 'fs'
import * as path from 'path'
import { debug, info, warn } from '../logger'
import { load } from 'cheerio'
import { snakeCase } from 'voca'
import * as ejs from 'ejs'
import fetch from './fetch'
const parse = (html : string) : string[] => {
  debug('parsing html')
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
const reduce = rows => {
  debug('reducing data')
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
  debug('mapping data')
  return activities
  .map(activity => ({ key: snakeCase(activity).toUpperCase(), value: activity }))
}
const write = (filename, content) => {
  const at = path.join(__dirname, '..', filename)
  warn(`writing ${at}`)
  fs.writeFileSync(at, content, { encoding: 'utf8' })
}

export default async () => {
  try {
    const html = await fetch()
    const data = parse(html)
    const activities = reduce(data)
    const objects = map(activities)
    let rendered
    rendered = await ejs.renderFile(path.join(__dirname, 'enum.ejs'), { name: 'Activity', entries: objects })
    write('activity.ts', rendered)
    rendered = await ejs.renderFile(path.join(__dirname, 'enum.test.ejs'), { name: 'Activity', filename: 'activity', entries: objects })
    write('activity.spec.ts', rendered)
  } catch(e) { console.error(e) }
}
