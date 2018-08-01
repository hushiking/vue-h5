<template>
  <div class="modal">
    <MyHeader />
    <div>
      <div class="modal_select">
        <Icon type="ios-search-strong" class="modal_select-icon"></Icon>
        <Select v-model="model14" multiple filterable remote :remote-method="remoteMethod2" :loading="loading2" :placeholder="placeholder">
          <Option v-for="(option, index) in options2" :value="option.value" :key="index">{{option.label}}</Option>
        </Select>
      </div>
      <div class="modal_category">
        <span>
          <em>标准经营范围</em>
        </span>
        <span>
          <em>许可经营范围</em>
        </span>
        <span>
          <em>手动输入经营范围</em>
        </span>
      </div>
      <div class="modal_keyword">
        <div>
          <span>种植硬质小麦</span>
          <i class="ivu-icon"></i>
        </div>
        <div>
          <span>种植软质小麦</span>
          <i class="ivu-icon"></i>
        </div>
        <div>
          <span>生产林木种子</span>
          <i class="ivu-icon"></i>
        </div>
      </div>
      <div class="modal_info">
        <div class="modal_info-title">根据您输入的信息生成的经营范围表述如下:</div>
        <div class="modal_info-border">
          种植硬质小麦、种植软质小麦；生产林木种子; 安全检查，安全技术防范，安全风险评估。
        </div>
        <p>(企业依法自主选择经营项目，开展经营活动；以及依法须经批准项目，经相关部门批准后依批准的内容开展经营活动；不得从事本市产业政策禁止和限制类项目的经营活动。）</p>
        <p>涉及到许可的项目，请填写许可信息，如果需要修改许可经营范围，可以通过修改【许可经营项目】信息中的【对应许可经营范围】实现已取得前置许可的，您可以根据许可文件批准内容添加许可经营项目。</p>
      </div>
    </div>
    <MyBottom :btn-type="btnType" :btn-text="btnText" />
    <Modal v-model="modal1" class="modal_modal" :closable="false">
      <div slot="header">
        <img src="../assets/img/ico-close.png" alt="" @click="hide">
        <p>后置许可经营用语</p>
        <span>登记完成后还需去其他机关办理许可地登记</span>
      </div>
      <MySearch />
      <div class="modal_modal-company">
        <div class="modal_modal-company_items">
          <div>
            <MyCheckBox />
            <div>
              <p>经营范围：自费出国留学服务</p>
              <p>实施机关：教育行政主管部门</p>
              <p>许可事项：自费出国留学中介服务</p>
            </div>
          </div>
          <div>
            <MyCheckBox />
            <div>
              <p>经营范围：废弃电器电子产品处理</p>
              <p>实施机关：环境保护行政主管部门</p>
              <p>许可事项：废弃电器电子产品处理</p>
            </div>
          </div>
          <div>
            <MyCheckBox />
            <div>
              <p>经营范围：国际船舶运输</p>
              <p>实施机关：交通运输部</p>
              <p>许可事项：国际海上运输服务及海运辅助业务经营</p>
            </div>
          </div>
        </div>
        <div class="modal_modal-company_page">
          <span>共12条记录</span>
          <div>
            <Button>上一页</Button>
            <Button>下一页</Button>
          </div>
        </div>
      </div>
      <div slot="footer">
        <Button type="primary" size="large" :loading="modal_loading">确定</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
  import MyHeader from '../components/MyHeader.vue'
  import MySearch from '../components/MySearch.vue'
  import MyBottom from '../components/MyBottom.vue'
  import MyCheckBox from '../components/MyCheckBox.vue'
  export default {
    data() {
      return {
        modal1: true,
        modal_loading: false,
        model14: [],
        loading2: false,
        placeholder: '请输入关键字检索经营范围表述',
        options2: [],
        list: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
          'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
          'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
          'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina',
          'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina',
          'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia',
          'Wisconsin', 'Wyoming'
        ],
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
    methods: {
      remoteMethod2(query) {
        if (query !== '') {
          this.loading2 = true
          setTimeout(() => {
            this.loading2 = false
            const list = this.list.map(item => {
              return {
                value: item,
                label: item
              }
            })
            this.options2 = list.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1)
          }, 200)
        } else {
          this.options2 = []
        }
      },
      hide() {
        this.modal1 = false
      }
    },
    components: {
      MyHeader,
      MySearch,
      MyBottom,
      MyCheckBox
    }
  }

</script>

<style lang="scss">
  .modal {
    >div {
      &:nth-child(2) {
        padding: 0.57rem;
      }
    }
    &_select {
      position: relative;
      &-icon {
        position: absolute;
        top: 0.25rem;
        left: 0.43rem;
        font-size: 0.72rem;
        color: #aaa;
        z-index: 10;
      }
      .ivu-select {
        &-selection {
          border-radius: 1.22rem;
          height: 1.22rem;
          line-height: 1.22rem;
          background: #f3f3f3;
          border: none;
          input {
            padding-left: 1.25rem;
            height: 1.22rem;
            line-height: 1.22rem;
            font-size: 0.5rem;
            &::-webkit-input-placeholder {
              color: #aaa;
              font-size: 0.5rem;
            }
            &::-moz-placeholder {
              color: #aaa;
              font-size: 0.5rem;
            }
            &:-ms-input-placeholder {
              color: #aaa;
              font-size: 0.5rem;
            }
          }
        }
      }
    }
    &_category {
      padding: 0.32rem 0;
      span {
        font-size: 0.43rem;
        &::before {
          content: '';
          display: inline-block;
          width: 0.32rem;
          height: 0.32rem;
          border-radius: 50%;
        }
        &:nth-child(1) {
          color: #7ed321;
          &::before {
            background-color: #7ed321;
          }
        }
        &:nth-child(2) {
          color: #f5a623;
          &::before {
            background-color: #f5a623;
          }
        }
        &:nth-child(3) {
          color: #d0021b;
          &::before {
            background-color: #d0021b;
          }
        }
        em {
          margin-left: 0.16rem;
        }
      }
    }
    &_keyword {
      border-bottom: 1px solid #ccc;
      padding-bottom: 0.32rem;
      >div {
        margin: 0.16rem;
        position: relative;
        display: inline-block;
        padding: 0 1.44rem 0 0.28rem;
        height: 1.2rem;
        line-height: 1.2rem;
        border-radius: 5px;
        font-size: 0.5rem;
        cursor: pointer;
        background: #7ed321;
        &:nth-child(3) {
          background: #f5a623;
        }
        span {
          color: #fff;
        }
        i {
          position: absolute;
          right: 0;
          top: 0;
          display: inline-block;
          height: 1.2rem;
          width: 1.2rem;
          background: rgba(0, 0, 0, 0.4);
          border-radius: 5px;
          &::before {
            position: absolute;
            content: "\F128";
            font-size: 0.7rem;
            color: #fff;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%, -50%, 0);
          }
        }
      }
    }
    &_info {
      font-size: 0.5rem;
      p {
        margin: 0.32rem 0;
        padding-bottom: 0.32rem;
        font-size: 0.43rem;
        color: #aaa;
        border-bottom: 1px solid #ccc;
      }
      &-title {
        margin: 0.32rem 0;
        border-bottom: none;
      }
      &-border {
        padding: 0.57rem 0.54rem;
        background: #f7fdf0;
        border: 1px solid #7ed321;
        border-radius: 0.2rem;
      }
    }
    &_modal {
      .ivu-modal {
        margin: 0;
        &-header {
          img {
            position: absolute;
            width: 1rem;
            right: 0;
            top: 0;
            transform: translate3d(45%, -45%, 0);
          }
          p {
            font-size: 0.57rem;
          }
          span {
            font-size: 0.43rem;
            color: #aaa;
          }
        }
        &-content {
          width: 80%;
          left: 10%;
          border-radius: 0;
        }
        &-body {
          font-size: 0.5rem;
          padding-bottom: 0;
        } // &-close {
        //   top: -0.5rem;
        //   right: -0.5rem;
        //   .ivu-icon-ios-close-empty {
        //     width: 0.9rem;
        //     height: 1rem;
        //     border-radius: 50%;
        //     background: #fff;
        //     color: #00b3ff;
        //     border-radius: 50%;
        //     &::before {
        //       font-size: 1rem;
        //       content: "\F128";
        //       position: absolute;
        //       top: 50%;
        //       left: 50%;
        //       transform: translate3d(-50%, -50%, 0);
        //     }
        //   }
        // }
        &-footer {
          border-top: none;
          padding-top: 0;
          button {
            display: block;
            margin: 0 auto;
          }
        }
      }
      &-company {
        padding: 0.54rem 0;
        font-size: 0.5rem;
        &_items {
          >div {
            display: flex;
            padding: 0.36rem 0 0.36rem 1.14rem;
            position: relative;
            align-items: center;
            border-bottom: 1px solid #ccc;
            input {
              top: 50%;
              transform: translate3d(-130%, -50%, 0);
            }
          }
        }
        &_page {
          padding: 0.36rem 0 0;
          height: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          button {
            padding: 0.21rem 0.54rem;
            margin: 0 0.12rem;
            color: #00b3ff;
            background: #fff;
          }
        }
      }
    }
  }

</style>
