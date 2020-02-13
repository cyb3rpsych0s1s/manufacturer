<template>
  <div class="container">
    <Header class="top" />
    <Card class="bottom" :manufacturer="manufacturer" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from './Header.vue'
import Card from './Card.vue'
export default Vue.extend({
  name: 'Detail',
  components: { Header, Card },
  props: {
    manufacturer: Object
  },
})
</script>

<style scoped>
  .top {
    margin-bottom: 30px;
  }
  .bottom {
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
</style>