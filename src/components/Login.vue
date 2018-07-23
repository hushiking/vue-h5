<template>
  <div class="login">
    <Row :gutter="16">
      <Col span="12">
      <Button type="primary" class="login_button face">刷脸登录</Button>
      </Col>
      <Col span="12">
      <Button type="primary" class="login_button">用户密码登录</Button>
      </Col>
    </Row>
    <Form ref="formInline" :model="formInline" class="login_input">
      <FormItem>
        <Input type="text" v-model="formInline.username" placeholder="请输入用户名或手机号" class="login_input-user"></Input>
      </FormItem>
      <FormItem>
        <Input type="password" v-model="formInline.password" placeholder="请输入密码" class="login_input-pass"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" long @click="handleSubmit('formInline')">登录</Button>
      </FormItem>
    </Form>
    <footer>
      <img src="../assets/logo.png">主办单位：丰台工商
    </footer>
    <Modal v-model="modal3" :closable="false" class="login_modal" class-name="vertical-center-modal">
      <div class="login_modal-center">
        <img src="../assets/ren.png" width="80">
      </div>
      尊敬的申请人：
      <br/>
      <p class="login_modal-tip">为了方便您办理业务，在公众号进行过身份认证的用户，可以直接通过身份证号进行扫脸登录，无需接收短信。通过扫脸登录的用户进行相关业务时，无需再次重复拍照。</p>
      <div class="login_modal-confirm">
        <input name="checkbox" v-model="flag" type="checkbox">
        <label>知道了，不再提示</label>
      </div>
      <div slot="footer">
        <Button type="primary" size="large" long @click="close">关闭</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formInline: {
          username: '',
          password: ''
        },
        modal3: false,
        flag: true
      }
    },
    methods: {
      handleSubmit(name) {
        this.$router.push({
          name: 'company'
        })
      },
      close() {
        this.modal3 = false
        if (this.flag) {
          localStorage.setItem('tip', 'false')
        }
      }
    },
    mounted() {
      if (localStorage.getItem('tip')) {
        this.modal3 = false
      } else {
        this.modal3 = true
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  body {
    padding: 15px;
  }

  .login {
    &_button {
      font-size: 16px;
      display: block;
      margin: 0 auto;
      width: 100%;
    }
    .face {
      background: #fff;
      color: #adadad;
      border: 1px solid #ccc;
    }
    input {
      height: 50px;
      font-size: 16px;
      &:focus {
        box-shadow: none;
      }
    }
    &_input {
      margin-top: 20px;
      &-user {
        input.ivu-input {
          background: url(../assets/login-ico1.png) no-repeat 15px center;
          background-size: auto 20px;
          text-indent: 30px;
        }
      }
      &-pass {
        input.ivu-input {
          background: url(../assets/login-ico2.png) no-repeat 15px center;
          background-size: auto 20px;
          text-indent: 30px;
        }
      }
      button {
        font-size: 16px;
      }
    }
    footer {
      text-align: center;
      color: #929292;
      font-size: 14px;
      height: 50px;
      line-height: 50px;
      position: absolute;
      width: 100%;
      left: 0px;
      bottom: 0px;
      img {
        width: 20px;
        margin-right: 5px;
        vertical-align: middle;
      }
    }
    &_modal {
      .ivu-modal {
        margin: 0;
        &-content {
          width: 80%;
          left: 10%;
          border-radius: 0;
        }
        &-body {
          font-size: 14px;
        }
      }
      &-center {
        text-align: center;
      }
      &-tip {
        text-indent: 28px;
      }
      &-confirm {
        position: relative;
        margin-top: 30px;
        text-align: center;
        input {
          position: relative;
          right: 0;
          top: 4px;
          width: 28px;
          height: 26px;
          border: none;
          outline: none;
          background: transparent;
          -webkit-appearance: none;
        }
        input:before {
          color: #aaa;
          content: "\F401";
          font-family: Ionicons;
          font-size: 28px;
          -webkit-font-smoothing: antialiased;
        }
        input:checked:before {
          color: #00b3ff;
          content: "\F3FF";
        }
        label {
          line-height: 1.1;
        }
      }
      .ivu-modal-footer {
        padding: 0;
        border: none;
        button {
          border-radius: 0;
        }
      }
    }
  }

  .vertical-center-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    .ivu-modal {
      top: 0;
    }
  }

</style>
