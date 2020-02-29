import List from './List'
import items from '../../server/seeds/manufacturers.ts'

export default {
  title: 'List',
}

export const normal = () => ({
  components: { List },
  template: `<List v-bind:items="items" />`,
  props: {
    items: {
      default: () => items
    }
  },
})