import { slugify } from 'voca'
import manufacturers from './static/manufacturers.json'
const index = async (base = '') => ({
  route: `${base}/`,
  component: './pages/index.vue',
})
const slugs = async (base = '') => manufacturers.map(manufacturer => ({
  route: `${base}/${slugify(manufacturer.name)}`,
  component: './pages/_slug.vue',
  payload: manufacturer
}))
export const routes = async (base = '') => {
  const i = await index(base)
  const s = await slugs(base)
  return [i].concat(s)
}