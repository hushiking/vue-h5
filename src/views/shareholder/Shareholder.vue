<template>
  <div class="shareholder">
    <MyHeader />
    <router-view></router-view>
  </div>
</template>

<script>
  import MyHeader from '../../components/MyHeader.vue'
  export default {
    components: {
      MyHeader
    }
  }

</script>
