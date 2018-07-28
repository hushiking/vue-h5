<template>
  <div class="keyinfo">
    <MyHeader />
    <Form class="keyinfo_form" label-position="left">
      <FormItem label="姓名" :label-width="150">
        <Input type="text" placeholder="请输入姓名"></Input>
      </FormItem>
      <FormItem label="证件类型" class="keyinfo_select">
        <Select v-model="val">
          <Option value="shenfenzheng">身份证</Option>
          <Option value="xueshengzheng">学生证</Option>
          <Option value="junrenzheng">军人证</Option>
        </Select>
      </FormItem>
      <FormItem label="证件号码" :label-width="150">
        <Input type="text" placeholder="请输入证件号码"></Input>
      </FormItem>
      <FormItem label="出生日期" :label-width="150">
        <Input type="text" placeholder="请选择出生日期"></Input>
      </FormItem>
      <div class="keyinfo_space"></div>
      <FormItem class="keyinfo_select" label="职务">
        <Select v-model="val">
          <Option value="shenfenzheng">执行董事</Option>
          <Option value="xueshengzheng">学生证</Option>
          <Option value="junrenzheng">军人证</Option>
        </Select>
      </FormItem>
      <FormItem class="keyinfo_select" label="任职期限">
        <Select v-model="val1">
          <Option value="shenfenzheng">10年</Option>
          <Option value="xueshengzheng">学生证</Option>
          <Option value="junrenzheng">军人证</Option>
        </Select>
      </FormItem>
      <FormItem class="keyinfo_select" label="产生方式">
        <Select v-model="val1">
          <Option value="shenfenzheng">选举</Option>
          <Option value="xueshengzheng">学生证</Option>
          <Option value="junrenzheng">军人证</Option>
        </Select>
      </FormItem>
      <FormItem class="keyinfo_select" label="文化程度">
        <Select v-model="val2">
          <Option value="shenfenzheng">本科</Option>
          <Option value="xueshengzheng">学生证</Option>
          <Option value="junrenzheng">军人证</Option>
        </Select>
      </FormItem>
      <FormItem class="keyinfo_select" label="兼任经理">
        <Select v-model="val1">
          <Option value="shenfenzheng">是否兼任经理</Option>
          <Option value="xueshengzheng">学生证</Option>
          <Option value="junrenzheng">军人证</Option>
        </Select>
      </FormItem>
    </Form>
    <div class="keyinfo_bottom">
      <Button type="primary">保存</Button>
    </div>
  </div>
</template>

<script>
  import MyHeader from '../components/MyHeader.vue'
  export default {
    data() {
      return {
        val: 'shenfenzheng',
        val1: 'shenfenzheng',
        val2: 'shenfenzheng',
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
      MyHeader
    }
  }

</script>

<style lang="scss">
  .keyinfo {
    height: 100%;
    background: #f3f3f3;
    &_space {
      height: 0.54rem;
      background: #f3f3f3;
    }
    &_form {
      background: #fff;
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
    &_select {
      .ivu-form-item-content {
        width: 5rem;
        height: 1.75rem;
        float: right;
        line-height: 1.75rem;
        text-align: right;
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
    &_bottom {
      padding: 0.72rem;
      button {
        display: block;
        margin: 0 auto;
        font-size: 0.57rem;
      }
    }
  }

</style>
