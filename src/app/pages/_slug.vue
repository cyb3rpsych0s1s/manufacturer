<template>
  <div>
    <Header />
    <Details :manufacturer="manufacturer" :onClick="() => {}" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '../components/Header.vue'
import Details from '../components/Details.vue'
import manufacturers from '../static/manufacturers.json'
import { slugify } from 'voca'

export default Vue.extend({
  components: { Header, Details },
  props: ['manufacturer'],
  computed: {
    manufacturer: function() { return manufacturers.find(({ name }) => slugify(name) === this.$route.params.slug) }
  }
})
</script>