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
      <img src="../assets/img/logo.png">主办单位：丰台工商
    </footer>
    <Modal v-model="modal3" :closable="false" class="login_modal" class-name="vertical-center-modal">
      <div class="login_modal-center">
        <img src="../assets/img/ren.png" width="80">
      </div>
      尊敬的申请人：
      <br/>
      <p class="login_modal-tip">为了方便您办理业务，在公众号进行过身份认证的用户，可以直接通过身份证号进行扫脸登录，无需接收短信。通过扫脸登录的用户进行相关业务时，无需再次重复拍照。</p>
      <div class="login_modal-confirm">
        <!-- <MyCheckBox :value="value" @input="flag = arguments[0]"></MyCheckBox> -->
        <!-- 下行代码是上行代码的语法糖，给组件添加 v-model 属性时，默认会把 value 作为组件的属性，然后把 'input' 值作为给组件绑定事件时的事件名。接受子组件发射的事件，为父组件绑定对应方法 -->
        <MyCheckBox v-model="flag" />
        <label>知道了，不再提示</label>
      </div>
      <div slot="footer">
        <Button type="primary" size="large" long @click="close">关闭</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
  import MyCheckBox from '../components/MyCheckBox.vue'
  import axios from 'axios'
  export default {
    data() {
      return {
        formInline: {
          username: '',
          password: ''
        },
        modal3: false,
        flag: false
      }
    },
    methods: {
      handleSubmit(name) {
        this.$router.push({
          name: 'proposed_establish'
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
        axios.post('/apis/system/user/setSession.do', {
            session: {
                username: '雷佳毅',
                cerno: '36012419951013XXX'
            }
        }).then(function(response) {
            console.log(response)
        }).catch(function(error) {
            console.log(error)
        })
        if (localStorage.getItem('tip')) {
            this.modal3 = false
        } else {
            this.modal3 = true
        }
    },
    components: {
      MyCheckBox
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .login {
    height: 100%;
    padding: 0.54rem;
    &_button {
      font-size: 0.57rem;
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
      height: 1.75rem;
      font-size: 0.57rem;
      &:focus {
        box-shadow: none;
      }
    }
    &_input {
      margin-top: 0.72rem;
      &-user {
        input.ivu-input {
          background: url(../assets/img/login-ico1.png) no-repeat 0.54rem center;
          background-size: auto 0.72rem;
          text-indent: 1.1rem;
        }
      }
      &-pass {
        input.ivu-input {
          background: url(../assets/img/login-ico2.png) no-repeat 0.54rem center;
          background-size: auto 0.72rem;
          text-indent: 1.1rem;
        }
      }
      button {
        font-size: 0.57rem;
      }
    }
    footer {
      text-align: center;
      color: #929292;
      font-size: 0.5rem;
      height: 1.75rem;
      line-height: 1.75rem;
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 0;
      img {
        width: 0.72rem;
        margin-right: 0.18rem;
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
          font-size: 0.5rem;
        }
      }
      &-center {
        text-align: center;
      }
      &-tip {
        text-indent: 1rem;
      }
      &-confirm {
        position: relative;
        margin-top: 1.1rem;
        text-align: center;
        input {
          left: 1.35rem;
          top: 50%;
          transform: translateY(-50%)
        }
      }
      .ivu-modal-footer {
        padding: 0;
        border: none;
        button {
          border-radius: 0;
          font-size: 0.57rem;
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
