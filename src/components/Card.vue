<template>
  <div class="container">
    <div class="top">
      <h1 class="header">{{ manufacturer.name }}</h1>
    </div>
    <div class="middle">
      <ul>
        <li
        v-for="activity in sort(manufacturer.activities)"
        :item="activity"
        :key="activity"
        augmented-ui="tl-clip exe">
          {{ activity }}
        </li>
      </ul>
      <span :class="flagclass(manufacturer.country)" />
    </div>
    <div class="spacer tiny"/>
    <div :class="backgroundclass(manufacturer.background)" augmented-ui="br-clip exe">
      <p>{{ manufacturer.background || 'Unknown background' }}</p>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    name: 'Card',
    props: {
      manufacturer: Object
    },
    methods: {
      flagclass: iso2 => `country flag-icon flag-icon-${iso2.toLowerCase()} flag-icon-squared`,
      sort: array => array.sort(),
      backgroundclass: background => background ? 'augmented bottom' : 'augmented bottom none'
    }
  })
</script>

<style scoped>
  .spacer.tiny {
    height: 1px;
  }
  .spacer.wide {
    height: 25px;
  }
  .augmented {
    padding: 15px;
    text-align: left;
    --aug-l: 5px;
    --aug-r: 5px;
  }
  .top {
    display: flex;
    justify-content: space-between;
    padding-left: 15px;
  }
  .middle {
    display: flex;
    justify-content: space-between;
  }
  .bottom {
    --aug-border: 1px;
    --aug-inset-bg: #f6ee82;
  }
  .country {
    width: 20px;
    height: 20px;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  li {
    color: #010001;
    --aug-border: 1px;
    --aug-inset-bg: #f6ee82;
    padding: 5px 10px 5px 15px;
    margin-right: 2px;
  }
  .none {
    font-style: italic;
  }
  .header {
    font-family: 'Audiowide', 'sans-serif';
    text-transform: uppercase;
    color: #f6ee82;
  }
</style>