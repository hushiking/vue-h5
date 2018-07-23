<template>
  <div class="register">
    <Form ref="formInline" :model="formInline">
      <Input type="text" v-model="formInline.username" placeholder="请输入用户名"></Input>
      <Input type="password" v-model="formInline.password" placeholder="请输入密码"></Input>
      <Input type="password" v-model="formInline.password" placeholder="请在再次输入密码"></Input>
      <Input type="text" v-model="formInline.password" placeholder="请输入姓名"></Input>

      <Input type="text" v-model="formInline.username" placeholder="请输入用户名" class="register_block"></Input>
      <Input type="text" v-model="formInline.username" placeholder="请输入移动电话"></Input>
      <Input type="text" v-model="formInline.username" placeholder="请输入联系地址"></Input>
      <Input type="text" v-model="formInline.username" placeholder="请输入邮箱"></Input>

      <div class="register_pos">
        <Input type="text" placeholder="请输入校验码"></Input>
          <Button type="primary">获取验证码</Button>
      </div>
      <div class="register_bottom">
        温馨提示：<br/>
        <p>请填写本人真实有效的移动电话号码，后续办理业务将用此号码作为登陆和业务校验使用，如电话号码发生变化，请及时登陆系统变更</p>
        <Button type="primary" long>注册</Button>
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
        password: ''
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
.register {
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
  &_block {
    margin-top: 15px;
    border-top: 1px solid #dedede;
  }
  &_pos {
    position: relative;
    margin-top: 15px;
    border-top: 1px solid #dedede;
    button {
      position: absolute;
      right: 10px;
      top: 8px;
    }
  }
  &_bottom {
    margin: 15px;
    font-size: 14px;
    p {
      text-indent: 28px;
    }
    button {
      margin-top: 15px;
      font-size: 16px;
    }
  }
}
</style>
