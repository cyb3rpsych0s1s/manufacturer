<template>
  <v-app dark>
    <v-header>
      <Header class="top" :onClick="onClick" />
    </v-header>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '../components/Header.vue'
export default Vue.extend({
  name: 'app',
  components: { Header },
  props: {
    onClick: { type: Function, default: () => {} }
  },
})
</script>

<style scoped>
  .top {
    margin-bottom: 30px;
  }
</style>