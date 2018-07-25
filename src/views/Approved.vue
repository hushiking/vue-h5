<template>
  <div class="approved">
    <MyHeader />
    <div class="approved_main">
      <div class="approved_main-title">审批意见</div>
      <div class="approved_main-content">
        <p>审批机关：<span>北京市工商行政管理局丰台分局</span></p>
        <p>审批状态：<span>退回修改</span></p>
        <p>审批意见：<span>填写住所信息；上传主要人员身份证照片；上传产权文件</span></p>
      </div>
      <div class="approved_main-pic">
        <img src="../assets/img/spyj.png" alt="">
      </div>
    </div>
    <div class="approved_main-confirm">
      <Button type="primary" size="large">确定</Button>
    </div>
  </div>
</template>

<script>
import MyHeader from '../components/MyHeader'
export default {
  components: {
    MyHeader
  }
}
</script>

<style lang="scss">
.approved {
  &_main {
    margin: 0.72rem;
    padding: 0.18rem 0.54rem 0;
    border: 1px solid #ccc;
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
    }
    &-pic {
      text-align: center;
      img {
        width: 7.14rem;
        vertical-align: bottom;
      }
    }
    &-confirm {
      margin-top: 1.75rem;
      text-align: center;
    }
  }
}
</style>
