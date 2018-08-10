<template>
  <div class="baseinfo">
    <MyHeader />
    <Form class="baseinfo_form" label-position="left">
      <FormItem label="营业期限" :label-width="150">
        <Input v-model="formItem.value1" type="text" placeholder="年"></Input>
      </FormItem>
      <FormItem label="北京市 丰台区" :label-width="150">
        <Input v-model="formItem.value2" type="text" placeholder="住所(经营场所)"></Input>
      </FormItem>
      <FormItem label="北京市 丰台区" :label-width="150">
        <Input v-model="formItem.value3" type="text" placeholder="生产经营地"></Input>
      </FormItem>
      <div class="baseinfo_space"></div>
      <FormItem label="住所（产权人）" :label-width="150">
        <Input v-model="formItem.value4" type="text" placeholder=""></Input>
      </FormItem>
      <FormItem class="baseinfo_select">
        <Select v-model="formItem.select1" placeholder="请选择住宿产权类型">
          <Option value="shenfenzheng">请选择住宿产权类型</Option>
          <Option value="xueshengzheng">学生证</Option>
          <Option value="junrenzheng">军人证</Option>
        </Select>
      </FormItem>
      <FormItem class="baseinfo_select">
        <Select v-model="formItem.select2" placeholder="请选择住所提供方式">
          <Option value="shenfenzheng">请选择住所提供方式</Option>
          <Option value="xueshengzheng">学生证</Option>
          <Option value="junrenzheng">军人证</Option>
        </Select>
      </FormItem>
      <FormItem label="营业面积" :label-width="150">
        <Input v-model="formItem.value5" type="text" placeholder="平方米"></Input>
      </FormItem>
      <div class="baseinfo_space"></div>
      <FormItem label="住房使用期限" :label-width="150">
        <Input v-model="formItem.value6" type="text" placeholder="年"></Input>
      </FormItem>
      <FormItem class="baseinfo_select">
        <Select v-model="formItem.select3" placeholder="请选择房屋用途">
          <Option value="shenfenzheng">请选择房屋用途</Option>
          <Option value="xueshengzheng">学生证</Option>
          <Option value="junrenzheng">军人证</Option>
        </Select>
      </FormItem>
      <FormItem label="执照副本数" :label-width="150">
        <Input v-model="formItem.value7" type="text" placeholder="份"></Input>
      </FormItem>
    </Form>
    <div class="baseinfo_bottom">
      <MyBottom :btn-type="btnType" :btn-text="btnText" />
      <MyFooter />
    </div>
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
          value1: '',
          value2: '',
          value3: '',
          value4: '',
          value5: '',
          value6: '',
          value7: '',
          select1: '',
          select2: '',
          select3: ''
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
      MyBottom,
      MyFooter
    }
  }

</script>

<style lang="scss">
  .baseinfo {
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
        padding-left: 0.54rem;
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
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 3.5rem;
    }
  }

</style>
