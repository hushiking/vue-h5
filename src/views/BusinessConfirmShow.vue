<template>
  <div class="show">
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <div class="show_item">
          <div class="show_item-title">
            {{item.title}}
            <Button :type="item.isConfirm ? 'success' : 'error'">{{ item.isConfirm ? '已确认' : '待确认' }}</Button>
          </div>
          <div class="show_item-info">
            <span>
              业务类型：{{item.type}}
            </span>
            <span>
              提交时间：{{item.time}}
            </span>
          </div>
        </div>
      </li>
    </ul>
    <div class="show_bottom">
      <MyFooter />
    </div>
  </div>
</template>

<script>
  import MyFooter from '../components/MyFooter.vue'
  export default {
    data() {
      return {
        items: [{
            title: '北京顾信丰科贸易有限公司',
            time: '2017年7月8日',
            type: '普通设立',
            isConfirm: true
          },
          {
            title: '北京顾信丰科贸易有限公司',
            time: '2017年7月8日',
            type: '普通设立',
            isConfirm: false
          },
          {
            title: '北京顾信丰科贸易有限公司',
            time: '2017年7月8日',
            type: '普通设立',
            isConfirm: false
          },
          {
            title: '北京顾信丰科贸易有限公司',
            time: '2017年7月8日',
            type: '普通设立',
            isConfirm: false
          }
        ]
      }
    },
    components: {
      MyFooter
    }
  }

</script>

<style lang="scss" scoped>
  .show {
    position: relative;
    min-height: 100%;
    background: #f3f3f3;
    padding-bottom: 1.75rem;
    li {
      margin-bottom: 0.54rem;
      background: #fff;
      padding: 0.54rem;
      overflow: hidden;
      &:last-child {
        margin-bottom: 0;
      }
    }
    &_item {
      background: #fff;
      &-title {
        color: #00b3ff;
        overflow: hidden;
        white-space: nowrap;
        border-bottom: 1px solid #eaeaea;
        padding-bottom: 0.22rem;
        margin-bottom: 0.14rem;
        button {
          margin-left: 0.32rem;
        }
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
    }
    &_bottom {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 1.75rem;
    }
  }

</style>
