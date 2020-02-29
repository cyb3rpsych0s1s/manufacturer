import Details from './Details'
import manufacturers from '../../server/seeds/manufacturers.ts'

export default {
  title: 'Details',
}

export const arasaka = () => ({
  components: { Details },
  template: `<Details :manufacturer="manufacturer" />`,
  props: {
    manufacturer: {
      default: () => manufacturers.find(({ name }) => name.toLowerCase() === 'arasaka')
    }
  },
})

export const militech = () => ({
  components: { Details },
  template: `<Details :manufacturer="manufacturer" />`,
  props: {
    manufacturer: {
      default: () => manufacturers.find(({ name }) => name.toLowerCase() === 'militech')
    }
  },
})

export const biotec = () => ({
  components: { Details },
  template: `<Details :manufacturer="manufacturer" />`,
  props: {
    manufacturer: {
      default: () => manufacturers.find(({ name }) => name.toLowerCase() === 'biotec')
    }
  },
})