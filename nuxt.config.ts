import { slugify } from 'voca'
// tslint:disable-next-line:no-implicit-dependencies
import colors from 'vuetify/es5/util/colors'
import manufacturers from './src/server/seeds/manufacturers'
console.log('nuxt.config.ts')
const routes = async () => manufacturers.map(manufacturer => ({
  route: `/${slugify(manufacturer.name)}`,
  payload: manufacturer
}))
export default {
  generate: {
    routes
  },
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://db.onlinewebfonts.com/c/a082fd3df68a0b54e0d4d794bc38d268?family=Blender+Pro+Bold' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Megrim&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Didact+Gothic&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Audiowide&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Tulpen+One&display=swap' },
    ],
  },
  build: {
    postcss: false,
    babel: {
      presets(env, [ preset, options ]) {
        return [
          [
            '@nuxt/babel-preset-app',
            {
              corejs: { version: 3 }
            }
          ]
        ]
      }
    },
  },
  buildModules: ['@nuxtjs/vuetify','@nuxt/typescript-build'],
  vuetify: {
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  css: [
    'augmented-ui/augmented.css',
    'flag-icon-css/css/flag-icon.css',
    '~assets/css/global.css'
  ],
  srcDir: 'src/app/',
  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true,
  },
  debug: true
}