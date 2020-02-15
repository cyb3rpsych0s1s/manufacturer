import Detail from './Detail'
import manufacturers from '../seeds/manufacturers.ts'

export default {
  title: 'Detail'
}

export const arasaka = () => ({
  components: { Detail },
  template: `<Detail :manufacturer="manufacturer" />`,
  props: {
    manufacturer: {
      default: () => manufacturers.find(({ name }) => name.toLowerCase() === 'arasaka')
    },
  },
})

export const militech = () => ({
  components: { Detail },
  template: `<Detail :manufacturer="manufacturer" />`,
  props: {
    manufacturer: {
      default: () => manufacturers.find(({ name }) => name.toLowerCase() === 'militech')
    }
  },
})

export const biotec = () => ({
  components: { Detail },
  template: `<Detail :manufacturer="manufacturer" />`,
  props: {
    manufacturer: {
      default: () => manufacturers.find(({ name }) => name.toLowerCase() === 'biotec')
    }
  },
})