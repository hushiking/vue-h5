<template>
  <div class="upload">
    <MyHeader />
    <Collapse v-model="value1">
      <Panel name="1" class="upload_panel">
        主要人员身份证照片
        <span>*</span>
        <p slot="content" v-for="(item, index) in myid" :key="index">
          <MyIdCard :name="item.name" :passed="item.passed" />
        </p>
      </Panel>
      <Panel name="2" class="upload_panel">
        住所使用证明
        <span>*</span>
        <p slot="content" v-for="(item, index) in myfile" :key="index">
          <MyFileUpload :multi="item.multi" />
        </p>
      </Panel>
      <Panel name="3" class="upload_panel">
        其他需上传文件(非必传)
        <p slot="content">
          <MyFileUpload :multi="true" />
        </p>
      </Panel>
    </Collapse>
    <div class="upload_tip">
      <p>温馨提示：</p>
      <p>全程电子化系统已经为您自动生成章程，您无需再上传。</p>
    </div>
    <div class="upload_bottom">
      <MyBottom :btn-type="btnType" :btn-text="btnText" />
      <MyFooter />
    </div>
  </div>
</template>

<script>
  import MyHeader from '../components/MyHeader.vue'
  import MyBottom from '../components/MyBottom.vue'
  import MyIdCard from '../components/MyIdCard.vue'
  import MyFileUpload from '../components/MyFileUpload.vue'
  import MyFooter from '../components/MyFooter.vue'
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
        },
        myid: [{
            name: '吴娜娜',
            passed: true
          },
          {
            name: '董高超',
            passed: false
          },
          {
            name: '李小明',
            passed: false
          }
        ],
        myfile: [{
          multi: false
        }, {
          multi: true
        }]
      }
    },
    methods: {

    },
    components: {
      MyHeader,
      MyBottom,
      MyIdCard,
      MyFileUpload,
      MyFooter
    }
  }

</script>

<style lang="scss">
  .upload {
    position: relative;
    min-height: 100%;
    padding-bottom: 4rem;
    background: #f3f3f3;
    .ivu-collapse {
      border: none;
      &-item {
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
      }
      &-content {
        padding: 0;
        &-box {
          padding: 0;
        }
      }
    }
    &_panel {
      padding: 0 0.54rem;
      margin-bottom: 0.54rem;
      border-bottom: 1px solid #dddee1;
      background: #fff;
      &:last-child {
        margin-bottom: 0;
      }
    }
    &_tip {
      padding: 0.54rem;
      background: #f3f3f3;
      font-size: 0.5rem;
    }
    &_bottom {
      position: absolute;
      width: 100%;
      height: 3.5rem;
      bottom: 0;
    }
  }

</style>
