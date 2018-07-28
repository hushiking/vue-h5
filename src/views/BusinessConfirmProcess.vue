<template>
  <div class="process">
    <div class="process_business">
      <div class="process_business-title">业务确认步骤如下</div>
      <img src="../assets/img/liucheng.png" alt="">
    </div>
    <div class="process_tip">
      <div class="process_tip-title">操作提示</div>
      <p>1、工商登记全程电子化业务申请必须经过企业法定代表人、全体股东及被委托(经办人)向申请内容进行确认后才允许提交，如发现申请内容存在问题，可退回给委托人(经办人)修改。</p>
      <p>2、法定代表人和股东不能及时完成上诉操作的，可授权被委托人(经办人)代为确认，法定代表人和股东可以对信息进行查询，如有问题请及时告知被委托人(经办人)。</p>
      <p>3、无论选择何种提交方式，均代表股东和法定代表人对全部申请内容的认定，并承担相应的法律责任。</p>
    </div>
    <div class="process_know">
      <Button type="primary">知道了</Button>
    </div>
  </div>
</template>

<style lang="scss">
  .process {
    height: 100%;
    background: #f3f3f3;
    &_business {
      padding: 0.54rem;
      background: #fff;
      text-align: center;
      &-title {
        text-align: left;
        color: #00b3ff;
        overflow: hidden;
        white-space: nowrap;
        border-bottom: 1px solid #eaeaea;
        padding-bottom: 0.22rem;
        margin-bottom: 0.14rem;
      }
      img {
        width: 12rem;
        margin-top: 0.36rem;
      }
    }
    &_tip {
      margin-top: 0.54rem;
      padding: 0 0.54rem;
      background: #fff;
      &-title {
        @extend .process_business-title
      }
      p {
        font-size: 0.5rem;
        padding: 0.18rem 0;
      }
    }
    &_know {
      padding: 0.72rem;
      text-align: center;
      button {
        font-size: 0.57rem;
      }
    }
  }

</style>
