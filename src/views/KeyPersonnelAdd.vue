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
        <div>
          <i class="ivu-icon"></i>
        </div>
      </div>
      <Row>经理
        <span>(仅为一人，可由董事长执，行董事，董事兼任)</span>
      </Row>
      <div class="add_items clearfix">
        <div>
          <i class="ivu-icon"></i>
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
        <div>
          <i class="ivu-icon"></i>
        </div>
      </div>
      <Row>法定代表人
        <span>(只能由担任执行董事，经理的人担任)</span>
      </Row>
      <FormItem class="add_box">
        <Select v-model="formItem.party" placeholder="请选择出资方式">
          <Option value="beijing">New York</Option>
          <Option value="shanghai">London</Option>
          <Option value="shenzhen">Sydney</Option>
        </Select>
      </FormItem>
      <MyBottom :btnType="btnType" :btnText="btnText" />
    </Form>
  </div>
</template>

<script>
  import MyHeader from '../components/MyHeader.vue'
  import MyBottom from '../components/MyBottom.vue'
  export default {
    data() {
      return {
        formItem: {
          party: ''
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
    components: {
      MyHeader,
      MyBottom
    }
  }

</script>

<style lang="scss">
  .add {
    form {
      .ivu-row {
        padding: 0 0.54rem;
        height: 1.75rem;
        line-height: 1.75rem;
        background: #f3f3f3;
        span {
          font-size: 0.43rem;
          color: #aaa;
        }
      }
    }
    &_items {
      padding: 0.54rem;
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
        width: 27%;
        height: 2.3rem;
        float: left;
        margin: 0 3%;
        border-radius: 5px;
        &:last-child {
          border: 1px solid #ccc;
          i {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%, -50%, 0);
            &::before {
              font-size: 1rem;
              color: #ccc;
              content: "\F218";
            }
          }
        }
      }
    }
    &_box {
      padding: 0.54rem;
      margin-bottom: 0;
    }
  }

</style>
