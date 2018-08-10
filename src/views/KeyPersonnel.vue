<template>
  <div class="personnel">
    <MyHeader />
    <Form>
      <Row>董事</Row>
      <FormItem>
        <div class="personnel_tip">(公司根据情况选择是否成立董事会)</div>
        <RadioGroup v-model="formItem.value1" vertical>
          <Radio label="不设立董事会"></Radio>
          <Radio label="设立董事会">
            <div class="personnel_radio">
              <p>设立董事会</p>
              <span>(董事会成员为3-13人，其中董事长1人)</span>
            </div>
          </Radio>
        </RadioGroup>
      </FormItem>
      <Row>监事</Row>
      <FormItem>
        <div class="personnel_tip">(公司需根据情况选择是否成立监事会；监事，必须为董事长(执行董事)、董事、经理、财务之外的人员)</div>
        <RadioGroup v-model="formItem.value2" vertical>
          <Radio label="不设立监事会，监事1-2人"></Radio>
          <Radio label="设立监事会">
            <div class="personnel_radio">
              <p>设立监事会</p>
              <span>(监事人数至少为3人，其中设监事会主席1人)</span>
            </div>
          </Radio>
        </RadioGroup>
      </FormItem>
    </Form>
    <div class="personnel_bottom">
      <MyBottom :btnType="btnType" :btnText="btnText" />
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
          value1: '设立董事会',
          value2: '不设立监事会，监事1-2人'
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
  .personnel {
    position: relative;
    min-height: 100%;
    padding-bottom: 4rem;
    form {
      .ivu-row {
        padding: 0 0.54rem;
        height: 1.75rem;
        line-height: 1.75rem;
        background: #f3f3f3;
      }
      .ivu-form-item {
        padding: 0.54rem;
      }
      .ivu-radio-wrapper {
        font-size: 0.57rem;
        margin: 0.32rem 0;
        .ivu-radio-inner {
          width: 18px;
          height: 18px;
          &::after {
            width: 10px;
            height: 10px;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%, -50%, 0);
          }
        }
      }
    }
    &_tip {
      color: #aaa;
      line-height: 1.5;
    }
    &_radio {
      float: right;
      line-height: 1.2;
      span {
          font-size: 0.43rem;
          color: #aaa;
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
