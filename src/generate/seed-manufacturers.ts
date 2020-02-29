import { load } from 'cheerio'
import * as ejs from 'ejs'
import * as fs from 'fs'
import * as path from 'path'
import { debug, warn } from '../logger'
import fetch from './fetch'
const countries = require('country-list-js')
const parse = (html : string) : string[] => {
  debug('parsing html')
  const $ = load(html)
  const rows = []
  $('body')
  .find($('tbody'))
  .map((i, e) => {
    const buffer = []
    let found
    let name
    let country
    let activities
    let background
    $(e)
    .find('tr')
    .contents()
    .map((i, e) => {
      buffer.push($(e).text())
    })
    name = buffer[0]
    country = buffer[2]
    found = buffer.findIndex(v => v.toLowerCase() === 'activities')
    activities = buffer[found + 1]
    found = buffer.findIndex(v => v.toLowerCase() === 'background')
    if (found !== -1) background = buffer[found + 1]
    rows.push({ name, country, activities, background })
  })
  return rows
}
const cache = {}
const specifics = (country) : any|undefined => {
  switch(country) {
    case 'Africa':
      return { code: { iso2: 'AC' } }
    case 'Europe':
      return { code: { iso2: 'EU' } }
    case 'Korea':
      return { code: { iso2: 'KR' } }
    case 'Luxemburg':
      return { code: { iso2: 'LU' } }
    case 'Orbital':
      return { code: { iso2: 'OR' } }
    case 'Swiss':
      return { code: { iso2: 'CH' } }
    default:
      return undefined
  }
}
const extract = country => country.indexOf('(') === -1 && country.indexOf(')') === -1
? country
: country.substring(country.indexOf('(') + 1, country.indexOf(')'))
const code = (country : string) : string|undefined => {
  if (cache[country]) return cache[country]
  const found = country.length === 2
  ? countries.findByIso2(country)
  : country.length === 3
    ? countries.findByIso3(country)
    : countries.findByName(country) || specifics(country)
  if (found) cache[country] = found.code.iso2
  return found ? found.code.iso2 : undefined
}
const map = manufacturers => {
  debug('mapping data')
  return manufacturers
  .map(({ name, country, activities, background }) => ({
    name,
    country: code(extract(country)),
    activities: activities.split(',').map(s => s.toLowerCase().trim()),
    background,
  }))
}
const write = (filename, content) => {
  const at = filename.indexOf('.ts') !== -1
  ? path.join(__dirname, '..', 'seeds', filename)
  : path.join(__dirname, '..', 'static', filename)
  warn(`writing ${at}`)
  fs.writeFileSync(at, content, { encoding: 'utf8' })
}

export default async () => {
  try {
    const html = await fetch()
    const data = parse(html)
    const objects = map(data)
    const rendered = await ejs.renderFile(path.join(__dirname, 'seed-manufacturers.ejs'), { manufacturers: objects })
    write('manufacturers.ts', rendered)
    write('manufacturers.json', JSON.stringify(objects, null, 2))
  } catch (e) { console.error(e) }  
}