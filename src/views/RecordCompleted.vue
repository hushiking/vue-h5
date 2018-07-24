<template>
  <div class="completed">
    <Header />
    <div class="completed_tip">
      <p>温馨提示:</p>
      <p>公安部门与工商部门完善公章刻制即时自动备案机制，对新开办企业免费发放以下四种印章各1枚，企业登记后相关印章将随营业执照一并发放。您可根据需要选择印章种类，其中“法定名称章”必选。与各区政务服务中心（大厅）达成服务意向的刻章企业将为您提供公章刻制服务，名单见下栏。</p>
      <div class="completed_badge">
        <div>
          <div>
            <MyCheckBox :model="name" /> 法定名称章
          </div>
          <div>
            <MyCheckBox /> 财务专用章
          </div>
        </div>
        <div>
          <div>
            <MyCheckBox /> 合同专用章
          </div>
          <div>
            <MyCheckBox /> 发票专用章
          </div>
        </div>
      </div>
    </div>
    <div class="completed_company">

    </div>
  </div>
</template>
<script>
  import Header from '../components/Header.vue'
  import MyCheckBox from '../components/MyCheckBox.vue'
  export default {
    data() {
      return {
        name: true
      }
    },
    components: {
      Header,
      MyCheckBox
    }
  }

</script>
<style lang="scss">
  .completed {
    &_tip {
      padding: 0 15px;
      >p {
        &:first-child {
          font-size: 16px;
          margin: 15px 0;
        }
        font-size: 14px;
        margin: 10px 0;
      }
    }
    &_badge {
      display: flex;
      flex-direction: column;
      >div {
        display: flex;
        justify-content: space-around;
        font-size: 16px;
        >div {
          display: flex;
          align-items: center;
          input {
            margin-right: 10px;
          }
        }
      }
    }
  }

</style>
