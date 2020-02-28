<template>
  <div class="container">
    <main>
      <ol>
        <li
          v-for="item in items"
          v-bind:item="item"
          v-bind:key="item.name">
          <nuxt-link :to="slugify(item.name)">
            <div class="card">
              <span :class="flagclass(item)" />
              <span class="header">{{ item.name }}</span>
              <div class="activities">
                <span 
                v-for="activity in sort(item.activities)"
                :key="activity"
                class="activity">
                  {{ activity }}
                </span>
              </div>
            </div>
          </nuxt-link>
        </li>
      </ol>
    </main>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { slugify } from 'voca'
  export default Vue.extend({
    name: 'List',
    props: {
      items: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      flagclass: item => `country flag-icon flag-icon-${item.country.toLowerCase()}`,
      sort: array => array.sort(),
      slugify: name => slugify(name)
    }
  })
</script>

<style scoped>
  ol {
    list-style: none;
    line-height: 1.5rem;
  }
  li {
    background: #d1d1d1;
    padding: 2px 2px 0px 2px;
  }
  .card {
    background: #5a5a5a;
    padding: 10px;
  }
  span {
    color: #cec9c9;
    vertical-align: middle;
  }
  span.header {
    padding: 5px;
  }
  div.activities {
    float: right;
  }
  span.activity {
    background: #4a4a4a;
    margin-left: 10px;
    padding: 1px 5px 5px 5px;
  }
  span.country {
    width: 30px;
    height: 30px;
    right: 0;
  }
  span.header {
    font-size: 1em;
    letter-spacing: 0.01em;
  }
  .container {
    height: 100vh;
    padding: 20px;
  }
</style>