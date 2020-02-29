<template>
  <List :items="items" />
</template>

<script lang="ts">
import Vue from 'vue'
import List from '../components/List.vue'
import items from '../seeds/manufacturers'
export default Vue.extend({
  components: { List },
  computed: {
    items: function () { return items.sort() }
  }
})
</script>