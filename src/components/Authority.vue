<template>
  <div class="authority">
    <div class="authority_content">
      <img src="../assets/ico-tanhao.png">
      <p>该功能需要权限认证，请先登录然后再进行业务办理。</p>
      <Button type="primary">登录</Button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        number: '',
        id: ''
      }
    }
  },
  methods: {
    handleSubmit(name) {
      this.$router.push({
        name: 'company'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.authority {
  margin: 15px;
  text-align: center;
  &_content {
    width: 70%;
    margin: 20% auto;
    img {
      width: 50%;
      margin-bottom: 20px;
    }
    p {
      font-size: 16px;
      color: #333;
      margin-bottom: 20px;
    }
    button {
      font-size: 14px;
      width: 100px;
    }
  }
}
</style>
