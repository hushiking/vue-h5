<template>
  <div class="authority">
    <div class="authority_content">
      <img src="../assets/img/ico-tanhao.png">
      <p>该功能需要权限认证，请先登录然后再进行业务办理。</p>
      <Button type="primary" size="large" @click="go">登录</Button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    go() {
      this.$router.push({
        name: 'login'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.authority {
  margin: 0.54rem;
  text-align: center;
  &_content {
    width: 70%;
    margin: 20% auto;
    img {
      width: 50%;
      margin-bottom: 0.72rem;
    }
    p {
      font-size: 0.57rem;
      color: #333;
      margin-bottom: 0.72rem;
    }
    button {
      font-size: 0.57rem;
      width: 3.6rem;
    }
  }
}
</style>
