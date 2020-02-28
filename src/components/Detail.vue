<template>
  <div class="container">
    <Card :manufacturer="manufacturer" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Card from './Card.vue'
export default Vue.extend({
  name: 'Detail',
  components: { Card },
  props: {
    manufacturer: Object,
    onClick: Function
  },
})
</script>