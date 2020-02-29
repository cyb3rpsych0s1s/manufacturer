<template>
  <Details :manufacturer="manufacturer" :onClick="() => {}" />
</template>

<script lang="ts">
import Vue from 'vue'
import Details from '../components/Details.vue'
import manufacturers from '../static/manufacturers.json'
import { slugify } from 'voca'

export default Vue.extend({
  components: { Details },
  computed: {
    manufacturer: function() { return manufacturers.find(({ name }) => slugify(name) === this.$route.params.slug) }
  }
})
</script>