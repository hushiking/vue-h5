<template>
  <div class="keyinfo">
    <MyHeader />
    <Form class="keyinfo_form" label-position="left">
      <FormItem label="姓名" :label-width="150">
        <Input v-model="formItem.value1" type="text" placeholder="请输入姓名"></Input>
      </FormItem>
      <FormItem label="证件类型" class="keyinfo_select">
        <Select v-model="formItem.select1">
          <Option value="shenfenzheng">身份证</Option>
          <Option value="xueshengzheng">学生证</Option>
          <Option value="junrenzheng">军人证</Option>
        </Select>
      </FormItem>
      <FormItem label="证件号码" :label-width="150">
        <Input v-model="formItem.value2" type="text" placeholder="请输入证件号码"></Input>
      </FormItem>
      <FormItem label="出生日期" :label-width="150">
        <Input v-model="formItem.value3" type="text" placeholder="请选择出生日期"></Input>
      </FormItem>
      <div class="keyinfo_space"></div>
      <FormItem class="keyinfo_select" label="职务">
        <Select v-model="formItem.select2">
          <Option value="shenfenzheng">执行董事</Option>
          <Option value="xueshengzheng">学生证</Option>
          <Option value="junrenzheng">军人证</Option>
        </Select>
      </FormItem>
      <FormItem class="keyinfo_select" label="任职期限">
        <Select v-model="formItem.select3">
          <Option value="shenfenzheng">10年</Option>
          <Option value="xueshengzheng">学生证</Option>
          <Option value="junrenzheng">军人证</Option>
        </Select>
      </FormItem>
      <FormItem class="keyinfo_select" label="产生方式">
        <Select v-model="formItem.select4">
          <Option value="shenfenzheng">选举</Option>
          <Option value="xueshengzheng">学生证</Option>
          <Option value="junrenzheng">军人证</Option>
        </Select>
      </FormItem>
      <FormItem class="keyinfo_select" label="文化程度">
        <Select v-model="formItem.select5">
          <Option value="shenfenzheng">本科</Option>
          <Option value="xueshengzheng">学生证</Option>
          <Option value="junrenzheng">军人证</Option>
        </Select>
      </FormItem>
      <FormItem class="keyinfo_select" label="兼任经理">
        <Select v-model="formItem.select6">
          <Option value="shenfenzheng">是否兼任经理</Option>
          <Option value="xueshengzheng">学生证</Option>
          <Option value="junrenzheng">军人证</Option>
        </Select>
      </FormItem>
    </Form>
    <div class="keyinfo_bottom">
      <Button type="primary" @click="go">保存</Button>
      <MyFooter />
    </div>
  </div>
</template>

<script>
  import MyHeader from '../components/MyHeader.vue'
  import MyFooter from '../components/MyFooter.vue'
  export default {
    data() {
      return {
        formItem: {
          value1: '',
          value2: '',
          value3: '',
          select1: '',
          select2: '',
          select3: '',
          select4: '',
          select5: '',
          select6: ''
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
        this.$router.push({ name: 'key_personnel_add' })
      }
    },
    components: {
      MyHeader,
      MyFooter
    }
  }

</script>

<style lang="scss">
  .keyinfo {
    position: relative;
    min-height: 100%;
    padding-bottom: 4rem;
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
    &_bottom {
      // padding: 0.72rem;
      position: absolute;
      height: 3.5rem;
      bottom: 0;
      width: 100%;
      button {
        display: block;
        margin: 0 auto;
        font-size: 0.57rem;
      }
    }
  }

</style>
