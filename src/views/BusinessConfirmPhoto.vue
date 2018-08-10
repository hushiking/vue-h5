<template>
  <div class="photo">
    <div class="photo_item">
      <div class="photo_item-title">{{item.title}}</div>
      <div class="photo_item-info">
        <span>
          业务类型：{{item.type}}
        </span>
        <span>
          提交时间：{{item.time}}
        </span>
      </div>
    </div>
    <div class="photo_pic">
      <img src="../assets/img/book.jpg" alt="">
    </div>
    <div class="photo_bottom">
      <MyBottom :btn-type="btnType" :btn-text="btnText" />
      <MyFooter />
    </div>
  </div>
</template>

<script>
  import MyBottom from '../components/MyBottom.vue'
  import MyFooter from '../components/MyFooter.vue'
  export default {
    data() {
      return {
        item: {
          title: '北京顾信丰科贸易有限公司',
          time: '2017年7月8日',
          type: '普通设立'
        },
        btnType: {
          type1: 'warning',
          type2: 'primary'
        },
        btnText: {
          text1: '退回经办人',
          text2: '确认提交'
        }
      }
    },
    components: {
      MyBottom,
      MyFooter
    }
  }

</script>

<style lang="scss" scoped>
  .photo {
    position: relative;
    min-height: 100%;
    background: #f3f3f3;
    padding-bottom: 4rem;
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
    }
    &_pic {
      padding: 5%;
      img {
        width: 100%;
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
