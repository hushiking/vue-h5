<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }

</script>

<style lang="scss">
  body {
    font-size: 0.57rem;
    color: #333;
    #app {
      height: 100%;
    }
  }

</style>
