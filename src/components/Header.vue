<template>
  <div class="container">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 469.3 469.3">
      <path d="M53.3 106.7H416c29.4 0 53.3-23.9 53.3-53.3S445.4 0 416 0H53.3C23.9 0 0 23.9 0 53.3S23.9 106.7 53.3 106.7z"/>
      <path d="M416 181.3H53.3C23.9 181.3 0 205.3 0 234.7S23.9 288 53.3 288H416c29.4 0 53.3-23.9 53.3-53.3S445.4 181.3 416 181.3z"/>
      <path d="M416 362.7H53.3C23.9 362.7 0 386.6 0 416s23.9 53.3 53.3 53.3H416c29.4 0 53.3-23.9 53.3-53.3S445.4 362.7 416 362.7z"/>
    </svg>
    <div class="title">
      <h1>Cyb</h1>
      <h2>3</h2>
      <h1>rpsych</h1>
      <h2>0</h2>
      <h1>s</h1>
      <h2>1</h2>
      <h1>s</h1>
    </div>
    <h6>v.0.0.1</h6>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import gsap from 'gsap'
  export default Vue.extend({
    name: 'Header',
    mounted: () => {
      const timeline = gsap.timeline()
      timeline.from('.title', { opacity: 0.1, duration: .5 })
      timeline.fromTo('h2', { duration: .2, color: '#faed51' }, { color: '#010001', repeat: 1 }, '+=0.2')
      timeline.fromTo('h6', { duration: .2, color: '#faed51' }, { color: '#010001', repeat: 2 }, '+=0.2')
    }
  })
</script>

<style scoped>
  .container {
    background: #faed51;
    color: #f6ee82;
    padding: 20px;
    display: flex;
  }
  svg {
    float: left;
    width: 40px;
    padding-right: 100px;
    fill: #59541c;
    cursor: pointer;
  }
  svg:hover, svg:active, svg:focus {
    fill: #010001;
  }
  .title {
    display: flex;
  }
  h1, h2 {
    font-family: 'Audiowide', 'sans-serif';
    text-transform: uppercase;
    font-weight: 700;
    color: #faed51;
  }
  h1 {
    font-size: xx-large;
    text-shadow: 0 1px 0 #a29a36,
               0 2px 0 #6b6523,
               0 3px 0 #010001,
               0 6px 1px #010001,
               0 0 5px #010001,
               0 1px 3px #464546,
               0 3px 5px #464546,
               0 5px 10px #464546,
               0 10px 10px #464546;
  }
  h2 {
    font-family: 'Tulpen One', 'sans-serif';
    font-size: 40px;
    text-shadow: 0 0 5px #6b6523;
    padding-top: 10px;
    padding-left: 4px;
    padding-right: 4px;
  }
  h6 {
    margin-left: auto;
    margin-top: auto;
    order: 2;
    font-size: smaller;
    color: #010001;
  }
</style>