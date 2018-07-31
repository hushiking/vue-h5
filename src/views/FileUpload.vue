<template>
  <div class="upload">
    <MyHeader />
    <Collapse v-model="value1">
      <Panel name="1">
        主要人员身份证照片
        <span>*</span>
        <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
      </Panel>
      <Panel name="2">
        住所使用证明
        <span>*</span>
        <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC
          Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。
        </p>
      </Panel>
      <Panel name="3">
        其他需上传文件(非必传)
        <p slot="content">
          <strong>
            <span>烟草</span>制品业</strong>
          <em style="display: block;text-indent: 1.14rem;">
            <span>烟草</span>代用品制雪茄烟、
            <span>烟草</span>代用品制卷烟</em>
          <strong>其他
            <span>烟草</span>制品制造</strong>
          <em style="display: block;text-indent: 1.14rem;">
            <span>烟草</span>精汁</em>
        </p>
      </Panel>
    </Collapse>
    <div class="upload_tip">
      <p>温馨提示：</p>
      <p>全程电子化系统已经为您自动生成章程，您无需再上传。</p>
    </div>
    <div class="upload_bottom">
      <MyBottom :btn-type="btnType" :btn-text="btnText" />
    </div>
  </div>
</template>

<script>
  import MyHeader from '../components/MyHeader.vue'
  import MyBottom from '../components/MyBottom.vue'
  export default {
    data() {
      return {
        value1: '3',
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
      MyBottom
    }
  }

</script>

<style lang="scss">
  .upload {
    height: 100%;
    background: #f3f3f3;
    .ivu-collapse {
      border: none;
      .ivu-collapse-item {
        padding: 0 0.54rem;
        margin-bottom: 0.54rem;
        border-bottom: 1px solid #dddee1;
        background: #fff;
        &:last-child {
          margin-bottom: 0;
        }
        .ivu-collapse-header {
          padding-left: 0;
          height: 1.75rem;
          line-height: 1.75rem;
          font-weight: 700;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          i {
            position: absolute;
            top: 0.57rem;
            right: 0;
            &:before {
              content: "\F123"
            }
          }
          span {
            color: #f86034;
          }
        }
        .ivu-collapse-content {
          padding-left: 0;
          span {
            color: #f86034;
          }
        }
      }
    }
    &_tip {
      padding: 0.54rem;
      background: #f3f3f3;
      font-size: 0.5rem;
    }
    &_bottom {
      background: #f3f3f3;
    }
  }

</style>
