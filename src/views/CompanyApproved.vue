<template>
  <div class="approved">
    <div class="approved_main">
      <div>
        <div class="approved_main-title">审批意见</div>
        <div class="approved_main-content">
          <p>审批机关：
            <span>北京市工商行政管理局丰台分局</span>
          </p>
          <p>审批状态：
            <span>退回修改</span>
          </p>
          <p>审批意见：
            <span>填写住所信息；上传主要人员身份证照片；上传产权文件</span>
          </p>
        </div>
        <div class="approved_main-pic">
          <img src="../assets/img/spyj.png" alt="">
        </div>
      </div>
    </div>
    <div class="approved_confirm">
      <Button type="primary">确定</Button>
    </div>
    <div class="approved_bottom">
      <MyFooter />
    </div>
  </div>
</template>

<script>
  import MyFooter from '../components/MyFooter.vue'
  export default {
    data() {
      return {

      }
    },
    components: {
      MyFooter
    }
  }

</script>

<style lang="scss" scoped>
  .approved {
    position: relative;
    min-height: 100%;
    padding-bottom: 2.25rem;
    &_main {
      padding: 0.72rem;
      >div {
        &:first-child {
          padding: 0.18rem 0.54rem 0;
          border: 1px solid #ccc;
        }
      }
      &-title {
        font-size: 0.64rem;
        font-weight: 700;
        text-align: center;
        height: 1.75rem;
        line-height: 1.75rem;
        border-bottom: 1px solid #ccc;
      }
      &-content {
        padding: 0.72rem 0 3.57rem;
        font-size: 0.5rem;
        p {
          &:nth-child(2) {
            span {
              color: #f6787b;
            }
          }
        }
      }
      &-pic {
        text-align: center;
        img {
          width: 7.14rem;
          vertical-align: bottom;
        }
      }
    }
    &_confirm {
      margin-top: 1.75rem;
      text-align: center;
      button {
        font-size: 0.57rem;
        padding: 0.28rem 1.44rem;
      }
    }
    &_bottom {
      position: absolute;
      bottom: 0;
      width: 100%;
    }
  }

</style>
