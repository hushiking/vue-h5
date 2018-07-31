<template>
  <div class="baseinfo">
    <MyHeader />
    <Form class="baseinfo_form" label-position="left">
      <FormItem label="营业期限" :label-width="150">
        <Input type="text" placeholder="年"></Input>
      </FormItem>
      <FormItem label="北京市 丰台区" :label-width="150">
        <Input type="text" placeholder="住所（经营场所）"></Input>
      </FormItem>
      <FormItem label="北京市 丰台区" :label-width="150">
        <Input type="text" placeholder="生产经营地"></Input>
      </FormItem>
      <div class="baseinfo_space"></div>
      <FormItem label="住所（产权人）" :label-width="150">
        <Input type="text" placeholder=""></Input>
      </FormItem>
      <FormItem class="baseinfo_select">
        <Select v-model="val">
          <Option value="shenfenzheng">请选择住宿产权类型</Option>
          <Option value="xueshengzheng">学生证</Option>
          <Option value="junrenzheng">军人证</Option>
        </Select>
      </FormItem>
      <FormItem class="baseinfo_select">
        <Select v-model="val1">
          <Option value="shenfenzheng">请选择住所提供方式</Option>
          <Option value="xueshengzheng">学生证</Option>
          <Option value="junrenzheng">军人证</Option>
        </Select>
      </FormItem>
      <FormItem label="营业面积" :label-width="150">
        <Input type="text" placeholder="平方米"></Input>
      </FormItem>
      <div class="baseinfo_space"></div>
      <FormItem label="住房使用期限" :label-width="150">
        <Input type="text" placeholder="年"></Input>
      </FormItem>
      <FormItem class="baseinfo_select">
        <Select v-model="val2">
          <Option value="shenfenzheng">请选择房屋用途</Option>
          <Option value="xueshengzheng">学生证</Option>
          <Option value="junrenzheng">军人证</Option>
        </Select>
      </FormItem>
      <FormItem label="执照副本数" :label-width="150">
        <Input type="text" placeholder="份"></Input>
      </FormItem>
    </Form>
    <div class="baseinfo_bottom">
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
      MyHeader,
      MyBottom
    }
  }

</script>

<style lang="scss">
  .baseinfo {
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
        height: 1.75rem;
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
    &_bottom {
      background: #f3f3f3;
    }
  }

</style>
