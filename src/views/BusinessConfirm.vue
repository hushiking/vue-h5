<template>
  <div class="confirm">
    <div class="confirm_item">
      <div class="confirm_item-title">{{item.title}}</div>
      <div class="confirm_item-info">
        <span>
          业务类型：{{item.type}}
        </span>
        <span>
          提交时间：{{item.time}}
        </span>
      </div>
      <Input type="textarea" v-model="value" placeholder="请填写退回原因" :rows="8"></Input>
    </div>
    <div class="confirm_bottom">
      <Button type="primary">确定退回</Button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: '',
        item: {
          title: '北京顾信丰科贸易有限公司',
          time: '2017年7月8日',
          type: '普通设立'
        }
      }
    }
  }

</script>

<style lang="scss">
  .confirm {
    height: 100%;
    background: #f3f3f3;
    &_item {
      padding: 0.54rem;
      background: #fff;
      &-title {
        color: #00b3ff;
        overflow: hidden;
        white-space: nowrap;
        border-bottom: 1px solid #eaeaea;
        padding-bottom: 0.22rem;
        margin-bottom: 0.14rem;
      }
      &-info {
        display: flex;
        justify-content: space-between;
        font-size: 0.5rem;
        color: #7d7d7d;
        overflow: hidden;
        white-space: nowrap;
        padding: 0.36rem 0;
      }
      .ivu-input-wrapper {
        width: 100% !important;
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
