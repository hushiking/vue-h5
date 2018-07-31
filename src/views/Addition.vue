<template>
  <div class="addition">
    <MyHeader />
    <Form>
      <FormItem>
        <RadioGroup class="addition_radio" v-model="formItem.type">
          <Radio label="type1">总部企业</Radio>
          <Radio label="type2">研发中心</Radio>
          <Radio label="type3">其他</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem class="addition_check">
        <MyCheckBox /> 总投资人为上年度世界500强企业
      </FormItem>
      <FormItem class="addition_box" label="投资人是否有中央单位">
        <i-Switch v-model="formItem.switch1" @on-change="change"></i-Switch>
        <CheckboxGroup v-model="formItem.central">
          <Checkbox label="中央企业"></Checkbox>
          <Checkbox label="中央在京事"></Checkbox>
          <br>
          <Checkbox label="驻京部队"></Checkbox>
          <Checkbox label="其他"></Checkbox>
        </CheckboxGroup>
      </FormItem>
      <FormItem class="addition_switch" label="法定代表人（负责人、执行合伙事务人、投资人）是否党员" :label-width="240">
        <i-Switch v-model="formItem.switch2" @on-change="change"></i-Switch>
      </FormItem>
      <div class="addition_space"></div>
      <FormItem class="addition_box" label="建立党组织">
        <i-Switch v-model="formItem.switch1" @on-change="change"></i-Switch>
        <Select v-model="formItem.party" placeholder="请选择党组织建制">
          <Option value="beijing">New York</Option>
          <Option value="shanghai">London</Option>
          <Option value="shenzhen">Sydney</Option>
        </Select>
        <Select v-model="formItem.party" placeholder="请选择党组织组建方式">
          <Option value="beijing">New York</Option>
          <Option value="shanghai">London</Option>
          <Option value="shenzhen">Sydney</Option>
        </Select>
      </FormItem>
      <FormItem class="addition_box" label="党组织是否本年度组件">
        <i-Switch v-model="formItem.switch1" @on-change="change"></i-Switch>
      </FormItem>
      <FormItem class="addition_switch" label="法定代表人（负责人、执行合伙事务人、投资人、经营者）是否党书记" :label-width="240">
        <i-Switch v-model="formItem.switch2" @on-change="change"></i-Switch>
      </FormItem>
      <div class="addition_space"></div>
      <FormItem class="addition_box" label="建立团组织">
        <i-Switch v-model="formItem.switch1" @on-change="change"></i-Switch>
        <Select v-model="formItem.party" placeholder="请输入团员人数">
          <Option value="beijing">New York</Option>
          <Option value="shanghai">London</Option>
          <Option value="shenzhen">Sydney</Option>
        </Select>
      </FormItem>
      <FormItem class="addition_box" label="建立工会组织">
        <i-Switch v-model="formItem.switch1" @on-change="change"></i-Switch>
        <Select v-model="formItem.party" placeholder="请输入工会人数">
          <Option value="beijing">New York</Option>
          <Option value="shanghai">London</Option>
          <Option value="shenzhen">Sydney</Option>
        </Select>
      </FormItem>
      <FormItem label="从业人数" :label-width="100">
        <Input type="text" placeholder="请输入从业人数"></Input>
      </FormItem>
      <FormItem label="其中本市人数" :label-width="120">
        <Input type="text" placeholder="请输入本市人数"></Input>
      </FormItem>
      <FormItem label="其中外地人数" :label-width="120">
        <Input type="text" placeholder="请输入外地人数"></Input>
      </FormItem>
      <div class="addition_space"></div>
      <FormItem class="addition_box addition_line" label="投资人中是否有本年度应届高校毕业生">
        <i-Switch v-model="formItem.switch1" @on-change="change"></i-Switch>
      </FormItem>
      <FormItem class="addition_box" label="该毕业生是否为在京生源">
        <i-Switch v-model="formItem.switch1" @on-change="change"></i-Switch>
      </FormItem>
    </Form>
    <MyBottom :btn-type="btnType" :btn-text="btnText" />
  </div>
</template>

<script>
  import MyHeader from '../components/MyHeader'
  import MyCheckBox from '../components/MyCheckBox'
  import MyBottom from '../components/MyBottom.vue'
  export default {
    data() {
      return {
        formItem: {
          type: '',
          switch1: '',
          central: [],
          switch2: '',
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
    methods: {
      change() {

      }
    },
    components: {
      MyHeader,
      MyCheckBox,
      MyBottom
    }
  }

</script>

<style lang="scss">
  .addition {
    height: 100%;
    background: #f3f3f3;
    form {
      background: #fff;
    }
    .ivu-form-item {
      margin-bottom: 0;
      padding: 0 0.54rem;
      border-bottom: 1px solid #dedede;
      label {
        font-size: 0.57rem;
      }
      &-label {
        text-align: left;
        line-height: 1.5;
      }
      &-content {
        font-size: 0.57rem;
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
    &_radio {
      height: 1.75rem;
      line-height: 1.75rem;
      display: flex;
      justify-content: space-between;
      .ivu-radio {
        margin-right: 1.1rem;
        .ivu-radio-inner {
          display: none;
        }
        .ivu-radio-input {
          top: -0.55rem;
          border: none;
          outline: none;
          opacity: 1;
          -webkit-appearance: none;
        }
        .ivu-radio-input:before {
          color: #aaa;
          content: "\F401";
          font-family: Ionicons;
          font-size: 1rem;
          -webkit-font-smoothing: antialiased;
        }
        .ivu-radio-input:checked:before {
          color: #00b3ff;
          content: "\F3FF";
        }
      }
    }
    &_check {
      height: 1.75rem;
      line-height: 1.75rem;
      .ivu-form-item-content {
        line-height: inherit;
        padding-left: 1.1rem;
        input {
          transform: translateX(-130%);
        }
      }
    }
    &_box {
      .ivu-form-item-content {
        clear: left;
        .ivu-switch {
          float: right;
          margin-top: -1.25rem;
        }
        .ivu-select {
          margin-bottom: 0.32rem;
        }
      }
    }
    &_switch {
      .ivu-switch {
        float: right;
        margin-top: 1rem;
      }
    }
    &_space {
      height: 0.54rem;
      background: #f3f3f3;
    }
    &_line {
      border-bottom: 0 !important;
    }
  }

</style>
