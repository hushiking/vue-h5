<template>
  <div class="fill">
    <div class="fill_natural">
      <p>自然人股东
        <span>（点击名片填写相关信息）</span>
      </p>
      <div>
        <div v-for="(item, index) in 2" :key="index" class="fill_natural-card">
          <MyCard :card="card1" />
        </div>
      </div>
    </div>
    <div class="fill_natural">
      <p>非自然人股东
        <span>（点击名片填写相关信息）</span>
      </p>
      <div>
        <div class="fill_natural-card">
          <MyCard :card="card2" />
          <p>企业注册资本：<span>200万元</span></p>
        </div>
      </div>
    </div>
    <MyBottom :btnType="btnType" :btnText="btnText" />
  </div>
</template>

<script>
  import MyHeader from '../../components/MyHeader.vue'
  import MyCard from '../../components/MyCard.vue'
  import MyBottom from '../../components/MyBottom.vue'
  export default {
    data() {
      return {
        card1: {
          type: 'person',
          header: '彭静',
          fund: '100万元',
          info: true
        },
        card2: {
          type: 'company',
          header: '北京乐海丰田科技发展有限公司',
          fund: '100万元',
          info: false
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
      MyCard,
      MyBottom
    }
  }

</script>

<style lang="scss">
.fill {
  height: 100%;
  &_natural {
    >p {
      padding: 0.54rem;
      font-weight: 700;
      background: #f3f3f3;
      span {
        font-size: 0.5rem;
        font-weight: 400;
        color: #aaa;
      }
    }
    >div {
      padding: 0.27rem 0;
    }
    &-card {
      padding: 0.27rem 0.54rem;
      overflow: hidden;
      >p {
        float: right;
        padding: 0.32rem 0;
        span {
          color: #f86034;
        }
      }
    }
  }
}
</style>
