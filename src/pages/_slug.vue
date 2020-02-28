<template>
  <Detail :manufacturer="manufacturer" :onClick="() => {}" />
</template>

<script lang="ts">
import Vue from 'vue'
import Detail from '../components/Detail.vue'
import manufacturers from '../seeds/manufacturers'
import { slugify } from 'voca'

export default Vue.extend({
  components: { Detail },
  computed: {
    manufacturer: function() { return manufacturers.find(({ name }) => slugify(name) === this.$route.params.slug) }
  }
})
</script>