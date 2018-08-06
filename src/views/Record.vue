<template>
  <div class="record">
    <MyHeader />
    <div class="record_tip">
      <p>温馨提示:</p>
      <p>为提升企业开办效率，新设立企业办理工商登记时，同步办理公章刻制备案，免费为企业刻制发放法定名称章、财务专用章、发票专用章、合同专用章。</p>
      <p>1、如您选择免费刻章，请在本页勾选“免费刻章”，并根据需要选择印章种类，其中“法定名称章”必选，企业印章随营业执照一并发放。</p>
      <p>您在领取公章时，请认真核对公章章面信息、印鉴留存卡信息是否准确无误。如有异议，立即联系公章刻制企业。</p>
      <p>2、如您选择自行刻章，请在本页勾选“自行刻制公章”，请取得《营业执照》后登陆微信公众号“首都治安微提示”办理公章刻制备案。</p>
      <p>3、您可登陆微信公众号“首都治安微提示”了解公章刻制备案相关业务。</p>
    </div>
    <div class="record_qr">
      <img src="../assets/img/ren.png" alt="">
      <br />
      <RadioGroup v-model="badge">
        <Radio label="免费刻章"></Radio>
        <Radio label="自费刻制公章"></Radio>
      </RadioGroup>
    </div>
    <div class="record_next">
      <Button type="primary" @click="go">下一步</Button>
      <MyFooter />
    </div>
  </div>
</template>

<script>
  import MyHeader from '../components/MyHeader.vue'
  import MyFooter from '../components/MyFooter.vue'
  export default {
    data() {
      return {
        badge: '免费刻章'
      }
    },
    methods: {
      go() {
        this.$router.push({ name: 'record_completed' })
      }
    },
    components: {
      MyHeader,
      MyFooter
    }
  }

</script>

<style lang="scss">
  .record {
    position: relative;
    min-height: 100%;
    padding-bottom: 4rem;
    &_tip {
      padding: 0 0.54rem;
      >p {
        font-size: 0.5rem;
        margin: 0.32rem 0;
        &:first-child {
          font-size: 0.57rem;
          margin: 0.54rem 0;
        }
        &:nth-child(2) {
          text-indent: 1rem;
          margin: 0.54rem 0;
        }
      }
    }
    &_qr {
      padding: 0.54rem 0;
      text-align: center;
      img {
        height: 3.6rem;
        width: 3.6rem;
        border: 1px solid #eee;
      }
      label {
        font-size: 0.5rem;
      }
    }
    &_next {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 3.5rem;
      text-align: center;
      button {
        font-size: 0.57rem;
        padding: 0.28rem 1.44rem;
      }
    }
  }

</style>
