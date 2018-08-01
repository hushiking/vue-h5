<template>
  <div class="contact">
    <MyHeader />
    <div>
      <Row>企业联系人</Row>
      <Form class="contact_company" label-position="left" :label-width="100">
        <FormItem label="姓名">
          <Input v-model="formItem.value1" type="text" placeholder="请输入姓名"></Input>
        </FormItem>
        <FormItem label="证件类型" class="contact_company-select">
          <Select v-model="formItem.select1">
            <Option value="shenfenzheng">身份证</Option>
            <Option value="xueshengzheng">学生证</Option>
            <Option value="junrenzheng">军人证</Option>
          </Select>
        </FormItem>
        <FormItem label="证件号码">
          <Input v-model="formItem.value2" type="text" placeholder="请输入证件号码"></Input>
        </FormItem>
        <FormItem label="移动电话">
          <Input v-model="formItem.value3" type="text" placeholder="请输入移动电话"></Input>
        </FormItem>
        <FormItem label="固定电话">
          <Input v-model="formItem.value4" type="text" placeholder="请输入固定电话"></Input>
        </FormItem>
        <div class="contact_space"></div>
        <Row>财务负责人</Row>
        <FormItem label="姓名">
          <Input v-model="formItem.value5" type="text" placeholder="请输入姓名"></Input>
        </FormItem>
        <FormItem label="证件类型" class="contact_company-select">
          <Select v-model="formItem.select2">
            <Option value="shenfenzheng">身份证</Option>
            <Option value="xueshengzheng">学生证</Option>
            <Option value="junrenzheng">军人证</Option>
          </Select>
        </FormItem>
        <FormItem label="证件号码">
          <Input v-model="formItem.value6" type="text" placeholder="请输入证件号码"></Input>
        </FormItem>
        <FormItem label="移动电话">
          <Input v-model="formItem.value7" type="text" placeholder="请输入移动电话"></Input>
        </FormItem>
      </Form>
    </div>
    <MyBottom :btn-type="btnType" :btn-text="btnText" />
  </div>
</template>

<script>
  import MyHeader from '../components/MyHeader.vue'
  import MyBottom from '../components/MyBottom.vue'
  export default {
    data() {
      return {
        formItem: {
          value1: '',
          value2: '',
          value3: '',
          value4: '',
          value5: '',
          value6: '',
          value7: '',
          select1: '',
          select2: ''
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
  .contact {
    >div {
      background: #fff;
      &:last-child {
        background: #f3f3f3;
      }
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
          padding: 0 0 0 0.54rem;
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
    &_space {
      height: 0.54rem;
      background: #f3f3f3;
    }
    &_company {
      &-select {
        .ivu-form-item-content {
          float: right;
          text-align: right;
          .ivu-select-selection {
            border: none;
            box-shadow: none;
            height: 100%;
            .ivu-select-selected-value {
              height: 1.75rem;
              line-height: 1.75rem;
              font-size: 0.57rem;
              padding-left: 0;
            }
            .ivu-select-placeholder {
              height: 1.75rem;
              line-height: 1.75rem;
              font-size: 0.57rem;
              padding-left: 0;
            }
          }
        }
      }
    }
  }

</style>
