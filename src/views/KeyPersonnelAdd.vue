<template>
  <div class="add">
    <MyHeader />
    <Form>
      <Row>董事</Row>
      <div class="add_items clearfix">
        <div class="add_items-person">
          <p>吴媛娜</p>
          <p>执行董事</p>
          <i class="ivu-icon"></i>
        </div>
        <div class="add_items-person">
          <p>李小明</p>
          <p>董事成员</p>
          <i class="ivu-icon"></i>
        </div>
        <div @click="go">
          <img src="../assets/img/ico-add.png" alt="">
        </div>
      </div>
      <Row>
        经理<span>(仅为一人，可由董事长，执行董事，董事兼任)</span>
      </Row>
      <div class="add_items clearfix">
        <div @click="go">
          <img src="../assets/img/ico-add.png" alt="">
        </div>
      </div>
      <Row>监事</Row>
      <div class="add_items clearfix">
        <div class="add_items-person">
          <p>赵刚</p>
          <p>监事会主席</p>
          <i class="ivu-icon"></i>
        </div>
        <div class="add_items-person">
          <p>李大大</p>
          <p>监事成员</p>
          <i class="ivu-icon"></i>
        </div>
        <div @click="go">
          <img src="../assets/img/ico-add.png" alt="">
        </div>
      </div>
      <Row>
        法定代表人<span>(只能由担任执行董事，经理的人担任)</span>
      </Row>
      <FormItem class="add_box">
        <Select v-model="formItem.fund" placeholder="请选择出资方式">
          <Option value="beijing">New York</Option>
          <Option value="shanghai">London</Option>
          <Option value="shenzhen">Sydney</Option>
        </Select>
      </FormItem>
      <div class="add_bottom">
        <MyBottom :btnType="btnType" :btnText="btnText" />
        <MyFooter />
      </div>
    </Form>
  </div>
</template>

<script>
  import MyHeader from '../components/MyHeader.vue'
  import MyBottom from '../components/MyBottom.vue'
  import MyFooter from '../components/MyFooter.vue'
  export default {
    data() {
      return {
        formItem: {
          fund: ''
        },
        btnType: {
          type1: 'warning',
          type2: 'primary'
        },
        btnText: {
          text1: '保存',
          text2: '下一步'
        }
      }
    },
    methods: {
      go() {
        this.$router.push({ name: 'key_info' })
      }
    },
    components: {
      MyHeader,
      MyBottom,
      MyFooter
    }
  }

</script>

<style lang="scss">
  .add {
    position: relative;
    min-height: 100%;
    padding-bottom: 4rem;
    form {
      .ivu-row {
        padding: 0 0.54rem;
        height: 1.75rem;
        line-height: 1.75rem;
        background: #f3f3f3;
        overflow: hidden;
        span {
          font-size: 0.43rem;
          color: #aaa;
        }
      }
    }
    &_items {
      padding: 0.54rem 0.54rem 0;
      &-person {
        padding: 0.36rem;
        border: 1px solid #569c17;
        background: #f7fdf0;
        p {
          &:first-child {
            font-weight: 700;
          }
          &:nth-child(2) {
            font-size: 0.43rem;
          }
        }
        i {
          position: absolute;
          right: -0.2rem;
          top: -0.2rem;
          &::before {
            font-size: 1rem;
            color: #569c17;
            content: "\F128";
          }
        }
      }
      >div {
        position: relative;
        width: 29%;
        height: 2.3rem;
        float: left;
        margin: 0 2.1% 0.54rem;
        border-radius: 5px;
        &:last-child {
          border: 1px solid #dddee1;
          img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%, -50%, 0);
            width: 1rem;
          }
        }
      }
    }
    &_box {
      padding: 0.54rem;
      margin-bottom: 0;
      .ivu-select-selection {
        height: 1.75rem;
        line-height: 1.75rem;
        .ivu-select-placeholder {
          height: 1.75rem;
          line-height: 1.75rem;
          font-size: 0.5rem;
        }
      }
    }
    &_bottom {
      position: absolute;
      width: 100%;
      height: 3.5rem;
      bottom: 0;
    }
  }

</style>
