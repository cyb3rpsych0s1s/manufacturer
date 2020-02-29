import 'augmented-ui/augmented.css'
import 'flag-icon-css/css/flag-icon.css'
import '../src/assets/css/global.css'

import Vue from 'vue'

import { configure } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

Vue.component('nuxt-link', {
  props:   ['to'],
  methods: {
    log() {
      action('link target')(this.to)
    },
  },
  template: '<a href="#" @click.prevent="log()"><slot>NuxtLink</slot></a>',
})

const req = require.context('../src/components', true, /\.stories\.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)