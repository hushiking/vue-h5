<template>
  <div class="natural">
    <MyHeader />
    <div>
      <Form class="natural_person" label-position="left" :label-width="100">
        <FormItem label="姓名">
          <Input type="text" placeholder="请输入姓名"></Input>
        </FormItem>
        <FormItem label="身份证号码">
          <Input type="text" placeholder="请输入身份证号码"></Input>
        </FormItem>
        <FormItem :label-width="140" label="身份证登记地址">
          <Input type="text" placeholder="请输入身份证登记地址"></Input>
        </FormItem>
        <FormItem label="民族">
          <Input type="text" placeholder="请输入民族"></Input>
        </FormItem>
        <div class="natural_space"></div>
        <Row>出资情况</Row>
        <FormItem class="natural_person-select">
          <Select v-model="val2">
            <Option value="shenfenzheng">身份证</Option>
            <Option value="xueshengzheng">学生证</Option>
            <Option value="junrenzheng">请选择出资方式</Option>
          </Select>
        </FormItem>
        <FormItem label="出资金额">
          <Input type="text" placeholder="请输入出资金额"></Input>
        </FormItem>
        <FormItem label="出资时间">
          <Input type="text" placeholder="请输入出资时间"></Input>
        </FormItem>
        <div class="natural_add">
          <Button type="primary">增加出资项</Button>
        </div>
        <div v-for="(item, index) in 2" :key="index" class="natural_fund">
          <div>
            <p>
              <span>货币</span>
              <em>100万元</em>
            </p>
            <p>2018年12月31日</p>
          </div>
          <Button type="error">删除</Button>
        </div>
      </Form>
      <MyBottom :btn-type="btnType" :btn-text="btnText" />
    </div>
  </div>
</template>

<script>
  import MyHeader from '../components/MyHeader.vue'
  import MyBottom from '../components/MyBottom.vue'
  export default {
    data() {
      return {
        val: 'shenfenzheng',
        val2: 'junrenzheng',
        btnType: {
          type1: 'warning',
          type2: 'primary'
        },
        btnText: {
          text1: '保存',
          text2: '取消'
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
  .natural {
    height: 100%;
    background: #f3f3f3;
    >div {
      background: #fff;
      &:last-child {
        background: #f3f3f3;
      }
      form {
        background: #fff;
        .ivu-row {
          padding: 0 0.54rem;
          height: 1.75rem;
          line-height: 1.75rem;
          color: #00b3ff;
          border-bottom: 1px solid #dedede;
        }
        .ivu-form-item {
          margin-bottom: 0;
          border-bottom: 1px solid #dedede;
          label {
            height: 1.75rem;
            font-size: 0.57rem;
            line-height: 1.75rem;
            padding: 0 0 0 15px;
          }
          input {
            height: 1.75rem;
            font-size: 0.57rem;
            border: none;
            border-radius: 0;
            &:hover {
              border: none;
            }
            &:focus {
              border: none;
              box-shadow: none;
            }
            &::-webkit-input-placeholder {
              text-align: right;
            }
            &::-moz-placeholder {
              text-align: right;
            }
            &:-ms-input-placeholder {
              text-align: right;
            }
          }
        }
      }
    }
    &_space {
      height: 0.54rem;
      background: #f3f3f3;
    }
    &_person {
      &-select {
        .ivu-form-item-content {
          height: 1.75rem;
          float: none;
          text-align: left;
          line-height: 1.75rem;
          padding-left: 0.54rem;
          .ivu-select-selection {
            border: none;
            box-shadow: none;
            .ivu-select-selected-value {
              font-size: 0.57rem;
              padding-left: 0;
            }
          }
        }
      }
    }
    &_add {
      padding: 0.54rem;
      background: #f3f3f3;
      button {
        display: block;
        margin: 0 auto;
      }
    }
    &_fund {
      display: flex;
      padding: 0.54rem 0.5rem;
      justify-content: space-between;
      border-top: 1px solid #ccc;
      &:last-child {
        border-bottom: 1px solid #ccc;
      }
      button {
        font-size: 0.57rem;
        padding: 0.36rem 1rem;
      }
      >div {
        p {
          span {
            color: #00b3ff;
            margin-right: 0.32rem;
          }
          em {
            color: red;
          }
          &:last-child {
            font-size: 0.43rem;
          }
        }
      }
    }
  }

</style>
