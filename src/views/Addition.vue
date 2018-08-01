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
        <MyCheckBox v-model="formItem.checkbox" />总投资人为上年度世界500强企业
      </FormItem>
      <FormItem class="addition_box" label="投资人是否有中央单位">
        <i-Switch v-model="formItem.switch1" @on-change="change1"></i-Switch>
        <CheckboxGroup v-model="formItem.central">
          <Checkbox label="中央企业" :disabled="formItem.disabled1"></Checkbox>
          <Checkbox label="中央在京事" :disabled="formItem.disabled1"></Checkbox>
          <br>
          <Checkbox label="驻京部队" :disabled="formItem.disabled1"></Checkbox>
          <Checkbox label="其他" :disabled="formItem.disabled1"></Checkbox>
        </CheckboxGroup>
      </FormItem>
      <FormItem class="addition_switch" label="法定代表人（负责人、执行合伙事务人、投资人）是否党员" :label-width="240">
        <i-Switch v-model="formItem.switch2"></i-Switch>
      </FormItem>
      <div class="addition_space"></div>
      <FormItem class="addition_box" label="建立党组织">
        <i-Switch v-model="formItem.switch3" @on-change="change3"></i-Switch>
        <Select v-model="formItem.party1" :disabled="formItem.disabled3" placeholder="请选择党组织建制">
          <Option value="beijing">New York</Option>
          <Option value="shanghai">London</Option>
          <Option value="shenzhen">Sydney</Option>
        </Select>
        <Select v-model="formItem.party2" :disabled="formItem.disabled3" placeholder="请选择党组织组建方式">
          <Option value="beijing">New York</Option>
          <Option value="shanghai">London</Option>
          <Option value="shenzhen">Sydney</Option>
        </Select>
      </FormItem>
      <FormItem class="addition_box" label="党组织是否本年度组件">
        <i-Switch v-model="formItem.switch4"></i-Switch>
      </FormItem>
      <FormItem class="addition_switch" label="法定代表人（负责人、执行合伙事务人、投资人、经营者）是否党书记" :label-width="240">
        <i-Switch v-model="formItem.switch5"></i-Switch>
      </FormItem>
      <div class="addition_space"></div>
      <FormItem class="addition_box" label="建立团组织">
        <i-Switch v-model="formItem.switch6" @on-change="change6"></i-Switch>
        <Input v-model="formItem.value1" placeholder="请输入团员人数" :disabled="formItem.disabled6" class="addition_box-input"></Input>
      </FormItem>
      <FormItem class="addition_box" label="建立工会组织">
        <i-Switch v-model="formItem.switch7" @on-change="change7"></i-Switch>
        <Input v-model="formItem.value2" placeholder="请输入工会人数" :disabled="formItem.disabled7" class="addition_box-input"></Input>
      </FormItem>
      <FormItem label="从业人数" :label-width="100" class="addition_input">
        <Input type="text" placeholder="请输入从业人数"></Input>
      </FormItem>
      <FormItem label="其中本市人数" :label-width="120" class="addition_input">
        <Input type="text" placeholder="请输入本市人数"></Input>
      </FormItem>
      <FormItem label="其中外地人数" :label-width="120" class="addition_input">
        <Input type="text" placeholder="请输入外地人数"></Input>
      </FormItem>
      <div class="addition_space"></div>
      <FormItem class="addition_box addition_line" label="投资人中是否有本年度应届高校毕业生">
        <i-Switch v-model="formItem.switch8"></i-Switch>
      </FormItem>
      <FormItem class="addition_box" label="该毕业生是否为在京生源">
        <i-Switch v-model="formItem.switch9"></i-Switch>
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
          type: 'type1',
          checkbox: false,
          switch1: false,
          disabled1: true,
          central: [],
          switch2: false,
          switch3: false,
          disabled3: true,
          party1: '',
          party2: '',
          switch4: true,
          switch5: true,
          switch6: true,
          disabled6: false,
          switch7: false,
          disabled7: true,
          switch8: true,
          switch9: false
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

      },
      change1(status) {
        if (status) {
          this.formItem.disabled1 = false
        } else {
          this.formItem.disabled1 = true
        }
      },
      change3(status) {
        if (status) {
          this.formItem.disabled3 = false
        } else {
          this.formItem.disabled3 = true
        }
      },
      change6(status) {
        if (status) {
          this.formItem.disabled6 = false
        } else {
          this.formItem.disabled6 = true
        }
      },
      change7(status) {
        if (status) {
          this.formItem.disabled7 = false
        } else {
          this.formItem.disabled7 = true
        }
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
        line-height: 1.5rem;
        .ivu-checkbox-group {
          .ivu-checkbox-wrapper {
            line-height: 1;
          }
        }
      }
    }
    &_input {
      input {
        height: 1.5rem;
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
        &-inner {
          display: none;
        }
        &-input {
          top: -0.55rem;
          border: none;
          outline: none;
          opacity: 1;
          -webkit-appearance: none;
          &:before {
            color: #aaa;
            content: "\F401";
            font-family: Ionicons;
            font-size: 1rem;
            -webkit-font-smoothing: antialiased;
          }
          &:checked:before {
            color: #00b3ff;
            content: "\F3FF";
          }
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
          margin-bottom: 0.36rem;
          &-selection {
            height: 1.5rem;
          }
          &-placeholder {
            height: 1.5rem;
            line-height: 1.5rem;
            font-size: 0.5rem;
          }
        }
      }
      &-input {
        input {
          height: 1.5rem;
          line-height: 1.5rem;
          margin-bottom: 0.32rem;
          &::-webkit-input-placeholder {
            font-size: 0.5rem;
          }
          &::-moz-placeholder {
            font-size: 0.5rem;
          }
          &:-ms-input-placeholder {
            font-size: 0.5rem;
          }
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
