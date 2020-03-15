<template>
  <div>
    <Header />
    <List :items="items" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '../components/Header.vue'
import List from '../components/List.vue'
import items from '../static/manufacturers.json'
export default Vue.extend({
  components: { Header, List },
  computed: {
    items: function () { return items.sort() }
  }
})
</script>