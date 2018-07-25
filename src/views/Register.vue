<template>
  <div class="register">
    <Form ref="formInline" :model="formInline">
      <Input type="text" v-model="formInline.username" placeholder="请输入用户名"></Input>
      <Input type="password" v-model="formInline.password" placeholder="请输入密码"></Input>
      <Input type="password" v-model="formInline.repassword" placeholder="请在再次输入密码"></Input>
      <Input type="text" v-model="formInline.name" placeholder="请输入姓名"></Input>

      <Input type="text" v-model="formInline.id" placeholder="请输入身份证号" class="register_block"></Input>
      <Input type="text" v-model="formInline.mobile" placeholder="请输入移动电话"></Input>
      <Input type="text" v-model="formInline.address" placeholder="请输入联系地址"></Input>
      <Input type="text" v-model="formInline.email" placeholder="请输入邮箱"></Input>

      <div class="register_pos">
        <Input type="text" v-model="formInline.captcha" placeholder="请输入校验码"></Input>
          <Button type="primary">获取验证码</Button>
      </div>
      <div class="register_bottom">
        温馨提示：<br/>
        <p>请填写本人真实有效的移动电话号码，后续办理业务将用此号码作为登陆和业务校验使用，如电话号码发生变化，请及时登陆系统变更</p>
        <Button type="primary" long @click="handleSubmit('formInline')">注册</Button>
      </div>
    </Form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        username: '',
        password: '',
        repassword: '',
        name: '',
        id: '',
        mobile: '',
        address: '',
        email: '',
        captcha: ''
      }
    }
  },
  methods: {
    handleSubmit(name) {
      console.log('>>>>', this.formInline)
      this.$router.push({
        name: 'setup_company'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.register {
  height: 100%;
  background: #f3f3f3;
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
  &_block {
    margin-top: 0.54rem;
    border-top: 1px solid #dedede;
  }
  &_pos {
    position: relative;
    margin-top: 0.54rem;
    border-top: 1px solid #dedede;
    button {
      position: absolute;
      right: 0.36rem;
      top: 0.28rem;
    }
  }
  &_bottom {
    margin: 0.54rem;
    font-size: 0.5rem;
    p {
      text-indent: 1rem;
    }
    button {
      margin-top: 0.54rem;
      font-size: 0.57rem;
    }
  }
}
</style>
