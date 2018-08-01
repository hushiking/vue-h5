<template>
  <div class="notself">
    <Form :model="formInline">
      <FormItem>
        <Input type="text" v-model="formInline.number" placeholder="名称文号中7位编号" class="notself_number"></Input>
      </FormItem>
      <FormItem>
        <Input type="password" v-model="formInline.id" placeholder="名称申请人证件号码" class="notself_id"></Input>
      </FormItem>
      <div class="notself_apply">
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
          name: 'company_baseinfo'
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .notself {
    height: 100%;
    background: #f3f3f3;
    .ivu-form-item {
      margin: 0;
    }
    input {
      height: 1.75rem;
      font-size: 0.57rem;
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
      margin: 0.54rem;
      button {
        font-size: 0.57rem;
      }
    }
  }
</style>
