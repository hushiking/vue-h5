<template>
  <div class="establish">
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <router-link :to="{ name: 'my_business' }" class="establish_apply">进入
          <br/>办理</router-link>
        <div class="establish_item">
          <div class="establish_item-title">{{item.title}}</div>
          <div class="establish_item-info">{{item.info}}</div>
        </div>
      </li>
    </ul>
    <div class="establish_fix">
      <div>如果非本账号申请的名称需要通过系统校验后可继续办理业务</div>
      <router-link :to="{ name: 'proposed_notself' }">非本账号申请</router-link>
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
            info: '(京丰）名称预查（内）字[2018] 第0422335号'
          },
          {
            title: '北京顾信丰科贸易有限公司',
            info: '(京丰）名称预查（内）字[2018] 第0422335号'
          },
          {
            title: '北京顾信丰科贸易有限公司',
            info: '(京丰）名称预查（内）字[2018] 第0422335号'
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
<style lang="scss" scoped>
  .establish {
    min-height: 100%;
    padding-bottom: 3rem;
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
        border-bottom: 1px solid #eaeaea;
        padding-bottom: 0.22rem;
        margin-bottom: 0.14rem;
      }
      &-info {
        font-size: 0.43rem;
        color: #7d7d7d;
      }
    }
    &_fix {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      padding: 0.54rem;
      display: flex;
      align-items: center;
      background: #fff;
      font-size: 0.5rem;
      overflow: hidden;
      a {
        margin-left: 0.36rem;
        word-break: keep-all;
        padding: 0 0.5rem;
        height: 1.5rem;
        line-height: 1.5rem;
        font-size: 0.5rem;
        border-radius: 3px;
        background: #fc7742;
        color: #fff;
      }
    }
  }

</style>
