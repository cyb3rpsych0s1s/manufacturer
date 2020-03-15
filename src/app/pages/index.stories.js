import Manufacturers from './index.vue'
import items from '../static/manufacturers.json'

export default {
  title: 'Manufacturers',
}

export const all = () => ({
  components: { Manufacturers },
  template: `<Manufacturers :items="items" />`,
  props: {
    manufacturer: {
      default: () => items
    }
  },
})