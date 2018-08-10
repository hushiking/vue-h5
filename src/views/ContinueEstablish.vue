<template>
  <div class="continue">
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <router-link :to="{ name: 'company_baseinfo' }" class="continue_apply">继续
          <br/>办理</router-link>
        <div class="continue_item">
          <div class="continue_item-title">{{item.title}}</div>
          <div class="continue_item-info">
            <span>申请时间：<em>{{item.time}}</em></span>
            <span>业务类型：<em>{{item.type}}</em></span>
          </div>
        </div>
      </li>
    </ul>
    <div class="continue_bottom">
      <MyFooter />
    </div>
  </div>
</template>

<script>
  import MyFooter from '../components/MyFooter.vue'
  export default {
    data() {
      return {
        items: [
          {
            title: '北京顾信丰科贸易有限公司',
            time: '2017年7月8日',
            type: '普通设立'
          },
          {
            title: '北京顾信丰科贸易有限公司',
            time: '2017年7月8日',
            type: '普通设立'
          },
          {
            title: '北京顾信丰科贸易有限公司',
            time: '2017年7月8日',
            type: '普通设立'
          }
        ]
      }
    },
    components: {
      MyFooter
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .continue {
    position: relative;
    min-height: 100%;
    padding-bottom: 2.25rem;
    background: #f3f3f3;
    li {
      margin-bottom: 0.54rem;
      background: #fff;
      padding: 0.54rem;
      overflow: hidden;
    }
    &_apply {
      float: right;
      margin-left: 0.54rem;
      padding: 0.22rem 0.43rem;
      cursor: pointer;
      color: #fff;
      border: 1px solid #00b3ff;
      border-radius: 3px;
      background: #00b3ff;
    }
    &_item {
      &-title {
        color: #00b3ff;
        overflow: hidden;
        white-space: nowrap;
        border-bottom: 1px solid #eaeaea;
        padding-bottom: 0.22rem;
        margin-bottom: 0.14rem;
      }
      &-info {
        font-size: 0.43rem;
        color: #7d7d7d;
        overflow: hidden;
        white-space: nowrap;
      }
    }
    &_bottom {
      position: absolute;
      width: 100%;
      bottom: 0;
    }
  }

</style>
