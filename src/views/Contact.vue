<template>
  <div class="contact">
    <Header />
    <div>
      <Row>企业联系人</Row>
      <Form class="contact_company" label-position="left" :label-width="100">
        <FormItem label="姓名">
          <Input type="text" placeholder="请输入姓名"></Input>
        </FormItem>
        <FormItem label="证件类型" class="contact_company-select">
          <Select v-model="val">
            <Option value="shenfenzheng">身份证</Option>
            <Option value="xueshengzheng">学生证</Option>
            <Option value="junrenzheng">军人证</Option>
          </Select>
        </FormItem>
        <FormItem label="证件号码">
          <Input type="text" placeholder="请输入证件号码"></Input>
        </FormItem>
        <FormItem label="移动电话">
          <Input type="text" placeholder="请输入移动电话"></Input>
        </FormItem>
        <FormItem label="固定电话">
          <Input type="text" placeholder="请输入固定电话"></Input>
        </FormItem>
        <div class="contact_space"></div>
        <Row>财务负责人</Row>
        <FormItem label="姓名">
          <Input type="text" placeholder="请输入姓名"></Input>
        </FormItem>
        <FormItem label="证件类型" class="contact_company-select">
          <Select v-model="val2">
            <Option value="shenfenzheng">身份证</Option>
            <Option value="xueshengzheng">学生证</Option>
            <Option value="junrenzheng">军人证</Option>
          </Select>
        </FormItem>
        <FormItem label="证件号码">
          <Input type="text" placeholder="请输入证件号码"></Input>
        </FormItem>
        <FormItem label="移动电话">
          <Input type="text" placeholder="请输入移动电话"></Input>
        </FormItem>
      </Form>
    </div>
    <Row>
      <Col span="12">
      <Button type="warning" size="large" long>保存</Button>
      </Col>
      <Col span="12">
      <Button type="primary" size="large" long>下一步</Button>
      </Col>
    </Row>
  </div>
</template>

<script>
  import Header from '../components/Header'
  export default {
    data() {
      return {
        val: 'shenfenzheng',
        val2: 'junrenzheng'
      }
    },
    components: {
      Header
    }
  }

</script>

<style lang="scss">
  .contact {
    background: #f3f3f3;
    >div {
      background: #fff;
      &:last-child {
        background: #f3f3f3;
        .ivu-col {
          padding: 0.72rem;
        }
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
    &_space {
      height: 0.54rem;
      background: #f3f3f3;
    }
    &_company {
      &-select {
        .ivu-form-item-content {
          width: 2.86rem;
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
    }
    button {
      font-size: 0.57rem;
    }
  }

</style>
