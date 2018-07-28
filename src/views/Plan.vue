<template>
  <div class="plan">
    <MyHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import MyHeader from '../components/MyHeader'
export default {
  components: {
    MyHeader
  }
}
</script>
