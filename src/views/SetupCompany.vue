<template>
  <div class="company">
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <router-link to="" class="company_apply">进入<br/>办理</router-link>
        <div class="company_item">
          <div class="company_item-title">{{item.title}}</div>
          <div class="company_item-info">{{item.info}}</div>
        </div>
      </li>
    </ul>
    <div class="company_fix">
      <router-link :to="{ name: 'not_self' }">非本账号申请</router-link>
      <div>如果非本账号申请的名称需要通过系统校验后可继续办理业务</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [{
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
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  body {
    background: #f3f3f3;
  }
  .company {
    li {
      margin-bottom: 15px;
      background: #fff;
      padding: 15px;
      overflow: hidden;
    }
    &_apply {
      float: right;
      margin-left: 15px;
      padding: 6px 12px;
      cursor: pointer;
      color: #fff;
      border: 1px solid #00b3ff;
      border-radius: 3px;
      background: #00b3ff;
    }
    &_item {
      &-title {
        font-size: 16px;
        color: #00b3ff;
        overflow: hidden;
        white-space: nowrap;
        border-bottom: 1px solid #eaeaea;
        padding-bottom: 6px;
        margin-bottom: 4px;
      }
      &-info {
        font-size: 12px;
        color: #7d7d7d;
        overflow: hidden;
        white-space: nowrap;
      }
    }
    &_fix {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      background: #fff;
      padding: 15px;
      line-height: 20px;
      overflow: hidden;
      a {
        float: right;
        margin-left: 10px;
        padding: 6px 12px;
        cursor: pointer;
        font-size: 14px;
        border-radius: 3px;
        background: #fc7742;
        color: #fff;
      }
    }
  }
</style>
