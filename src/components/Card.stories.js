import Card from './Card'
import manufacturers from '../seeds/manufacturers.ts'

export default {
  title: 'Card',
}

export const arasaka = () => ({
  components: { Card },
  template: `<Card :manufacturer="manufacturer" />`,
  props: {
    manufacturer: {
      default: () => manufacturers.find(({ name }) => name.toLowerCase() === 'arasaka')
    }
  },
})

export const militech = () => ({
  components: { Card },
  template: `<Card :manufacturer="manufacturer" />`,
  props: {
    manufacturer: {
      default: () => manufacturers.find(({ name }) => name.toLowerCase() === 'militech')
    }
  },
})

export const biotec = () => ({
  components: { Card },
  template: `<Card :manufacturer="manufacturer" />`,
  props: {
    manufacturer: {
      default: () => manufacturers.find(({ name }) => name.toLowerCase() === 'biotec')
    }
  },
})