<template>
  <div class="approved">
    <Header />
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
import Header from '../components/Header'
export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
.approved {
  &_main {
    margin: 20px;
    padding: 5px 15px 0;
    border: 1px solid #ccc;
    &-title {
      font-size: 18px;
      text-align: center;
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #ccc;
    }
    &-content {
      padding: 20px 0 100px;
      font-size: 14px;
    }
    &-pic {
      text-align: center;
      img {
        width: 200px;
        vertical-align: bottom;
      }
    }
    &-confirm {
      margin-top: 50px;
      text-align: center;
    }
  }
}
</style>
