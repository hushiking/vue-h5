<template>
  <div class="others">
    <Form :model="formInline">
      <Input type="text" v-model="formInline.number" placeholder="名称文号中7位编号" class="others_number"></Input>
      <Input type="password" v-model="formInline.id" placeholder="名称申请人证件号码" class="others_id"></Input>
      <div class="others_apply">
        <Button type="primary" long @click="handleSubmit('formInline')">进入办理</Button>
      </div>
    </Form>
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
  body {
    background: #f3f3f3;
  }
  .others {
    input {
      height: 50px;
      font-size: 16px;
      border: none;
      border-bottom: 1px solid #dedede;
      border-radius: 0;
      &:hover {
        border: none;
        border-bottom: 1px solid #dedede;
      }
      &:focus {
        border: none;
        border-bottom: 1px solid #dedede;
        box-shadow: none;
      }
    }
    &_apply {
      margin: 15px;
      button {
        font-size: 16px;
      }
    }
  }
</style>
