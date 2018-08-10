<template>
  <div class="bottom">
    <Button :type="btnType.type1">{{btnText.text1}}</Button>
    <Button :type="btnType.type2" @click="go">{{btnText.text2}}</Button>
  </div>
</template>

<script>
  export default {
    props: ['btnType', 'btnText'],
    methods: {
      go() {
        if (this.btnText.text2 === '取消') {
          window.history.go(-1)
        } else if (this.$router.history.current.name === 'company_baseinfo') {
          this.$router.push({ name: 'business_scope_lookup' })
        } else if (this.$router.history.current.name === 'business_scope_lookup') {
          this.$router.push({ name: 'shareholder' })
        } else if (this.$router.history.current.name === 'shareholder_fill') {
          this.$router.push({ name: 'key_personnel' })
        } else if (this.$router.history.current.name === 'key_personnel') {
          this.$router.push({ name: 'key_personnel_add' })
        } else if (this.$router.history.current.name === 'key_personnel_add') {
          this.$router.push({ name: 'contact' })
        } else if (this.$router.history.current.name === 'contact') {
          this.$router.push({ name: 'file_upload' })
        } else if (this.$router.history.current.name === 'file_upload') {
          this.$router.push({ name: 'addition' })
        } else if (this.$router.history.current.name === 'addition') {
          this.$router.push({ name: 'record' })
        }
      }
    }
  }

</script>

<style lang="scss" scoped>
  .bottom {
    display: flex;
    justify-content: space-around;
    // padding: 0.54rem;
    button {
      width: 45%;
      padding-top: 0.36rem;
      padding-bottom: 0.36rem;
      font-size: 0.57rem;
    }
  }

</style>
