<template>
  <div class="scope">
    <MyHeader />
    <div class="scope_main">
      <div class="scope_main-select">
        <Icon type="ios-search-strong" class="scope_main-select_icon"></Icon>
        <Select v-model="model14" filterable remote :remote-method="remoteMethod2" :loading="loading2">
          <Option v-for="(option, index) in options2" :value="option.value" :key="index">{{option.label}}</Option>
        </Select>
      </div>
      <Collapse v-model="value1" v-show="showCollapse">
        <p class="scope_result">以下为根据所输关键字检索出的结果
          <span @click="close">关闭</span>
        </p>
        <Panel name="1">
          种植棉、麻、糖、
          <span>烟草</span>
          <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
        </Panel>
        <Panel name="2">
          种植
          <span>烟草</span>
          <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC
            Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。
          </p>
        </Panel>
        <Panel name="3">
          依据前置许可部门批准内容核定（
          <span>烟草</span>）
          <p slot="content">
            <strong>
              <span>烟草</span>制品业
            </strong>
            <em style="display: block;text-indent: 1.14rem;">
              <span>烟草</span>代用品制雪茄烟、
              <span>烟草</span>代用品制卷烟
            </em>
            <strong>其他
              <span>烟草</span>制品制造</strong>
            <em style="display: block;text-indent: 1.14rem;">
              <span>烟草</span>精汁</em>
          </p>
        </Panel>
      </Collapse>
    </div>
  </div>
</template>

<script>
  import MyHeader from '../components/MyHeader.vue'
  export default {
    data() {
      return {
        model14: '烟草',
        loading2: false,
        options2: [],
        list: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
          'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
          'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
          'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina',
          'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina',
          'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia',
          'Wisconsin', 'Wyoming'
        ],
        value1: '3',
        showCollapse: true
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
      close() {
        this.model14 = ''
        this.showCollapse = false
      }
    },
    components: {
      MyHeader
    }
  }

</script>

<style lang="scss">
  .scope {
    font-size: 0.57rem;
    &_main {
      padding: 0.57rem;
      &-select {
        position: relative;
        &_icon {
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
      .ivu-collapse {
        background: #fff;
        border: none;
        &-item {
          &:last-child {
            border-bottom: 1px solid #dddee1;
          }
        }
        &-header {
          padding-left: 0 !important;
          height: 1.75rem !important;
          line-height: 1.75rem !important;
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
        &-content {
          padding-left: 0;
          span {
            color: #f86034;
          }
        }
      }
    }
    &_result {
      padding: 0.45rem 0;
      span {
        float: right;
        color: #00b3ff;
        cursor: pointer;
      }
    }
  }

</style>
