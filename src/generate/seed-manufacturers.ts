import * as fs from 'fs'
import * as path from 'path'
import { load } from 'cheerio'
import * as ejs from 'ejs'
import fetch from './fetch'
const countries = require('country-list-js')
const parse = (html : string) : string[] => {
  let root
  let name
  let country
  let activities
  const $ = load(html)
  const rows = []
  $('body')
  .find($('tbody'))
  .map((i, el) => {
    root = $(el).find('tr')
    name = $(root)
    .find('td')
    .first()
    .text()
    country = $(root)
    .next()
    .find('td')
    .next()
    .html()
    activities = $(root)
    .next()
    .next()
    .find('td')
    .next()
    .html()
    rows.push({ name, country, activities })
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
  return manufacturers
  .map(({ name, country, activities }) => ({
    name,
    country: code(extract(country)),
    activities: activities.split(',').map(s => s.toLowerCase().trim())
  }))
}
const write = (filename, content) => {
  fs.writeFileSync(path.join(__dirname, '..', filename), content, { encoding: 'utf8' })
}

export default async () => {
  try {
    const html = await fetch()
    const data = parse(html)
    const objects = map(data)
    const rendered = await ejs.renderFile(path.join(__dirname, 'seed-manufacturers.ejs'), { manufacturers: objects })
    write('manufacturers.ts', rendered)
  } catch (e) { console.error(e) }  
}