import Manufacturer from './_slug.vue'
import items from '../static/manufacturers.json'

export default {
  title: 'Manufacturer',
}
const format = obj => {
  const string = JSON.stringify(obj)
  return string
  .replace(/\'/gm, "\\'")
  .replace(/"/gm, "'")
}
const feed = searched => format(items.find(({ name }) => name.toLowerCase() === searched.toLowerCase()))
console.log(feed('arasaka'))

export const arasaka = () => ({
  components: { Manufacturer },
  template: `<Manufacturer :manufacturer="${feed('arasaka')}" />`,
})

export const militech = () => ({
  components: { Manufacturer },
  template: `<Manufacturer :manufacturer="${feed('militech')}" />`,
})