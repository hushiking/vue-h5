<template>
  <div class="completed">
    <MyHeader />
    <div class="completed_tip">
      <p>温馨提示:</p>
      <p>公安部门与工商部门完善公章刻制即时自动备案机制，对新开办企业免费发放以下四种印章各1枚，企业登记后相关印章将随营业执照一并发放。您可根据需要选择印章种类，其中“法定名称章”必选。与各区政务服务中心（大厅）达成服务意向的刻章企业将为您提供公章刻制服务，名单见下栏。</p>
      <div class="completed_badge">
        <div>
          <div>
            <MyCheckBox v-model="formItem.checked1" /> 法定名称章
          </div>
          <div>
            <MyCheckBox v-model="formItem.checked2" /> 财务专用章
          </div>
        </div>
        <div>
          <div>
            <MyCheckBox v-model="formItem.checked3" /> 合同专用章
          </div>
          <div>
            <MyCheckBox v-model="formItem.checked4" /> 发票专用章
          </div>
        </div>
      </div>
    </div>
    <div class="completed_space"></div>
    <div class="completed_company">
      <MySearch v-model="searchValue" @setValue="modifyValue" :placeholder="placeholder"></MySearch>
      <div class="completed_company-items">
        <div>
          <MyCheckBox v-model="formItem.checked5" />
          <div>
            <p>刻章企业名称：北京丰台XX刻字社</p>
            <p>刻章企业地址：丰台区XX路103号地下101室</p>
            <p>刻章企业联系方式：68888888</p>
          </div>
        </div>
        <div>
          <MyCheckBox v-model="formItem.checked6" />
          <div>
            <p>刻章企业名称：北京丰台XX刻字社</p>
            <p>刻章企业地址：丰台区XX路103号地下101室</p>
            <p>刻章企业联系方式：68888888</p>
          </div>
        </div>
      </div>
      <div class="completed_company-page">
        <span>共2条记录</span>
        <div>
          <Button>上一页</Button>
          <Button>下一页</Button>
        </div>
      </div>
    </div>
    <div class="completed_btn">
      <Button type="primary" @click="close">完成</Button>
      <MyFooter />
    </div>
  </div>
</template>
<script>
  import MyHeader from '../components/MyHeader.vue'
  import MyCheckBox from '../components/MyCheckBox.vue'
  import MySearch from '../components/MySearch.vue'
  import MyFooter from '../components/MyFooter.vue'
  export default {
    data() {
      return {
        formItem: {
          checked1: true,
          checked2: true,
          checked3: false,
          checked4: false,
          checked5: false,
          checked6: true
        },
        searchValue: '资源',
        placeholder: '请输入刻章企业名称',
        loading1: false,
        options1: [],
        list: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
          'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
          'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
          'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina',
          'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina',
          'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia',
          'Wisconsin', 'Wyoming'
        ]
      }
    },
    methods: {
      remoteMethod1(query) {
        if (query !== '') {
          this.loading1 = true
          setTimeout(() => {
            this.loading1 = false
            const list = this.list.map(item => {
              return {
                value: item,
                label: item
              }
            })
            this.options1 = list.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1)
          }, 200)
        } else {
          this.options1 = []
        }
      },
      close() {
        this.$router.push({ name: 'my_business' })
      },
      modifyValue(value) {
        this.searchValue = value
      }
    },
    components: {
      MyHeader,
      MyCheckBox,
      MySearch,
      MyFooter
    }
  }

</script>
<style lang="scss">
  .completed {
    position: relative;
    min-height: 100%;
    padding-bottom: 4rem;
    &_tip {
      padding: 0 0.54rem 0.36rem;
      >p {
        font-size: 0.5rem;
        margin: 0.36rem 0;
        &:first-child {
          font-size: 0.57rem;
          margin: 0.54rem 0;
        }
        &:nth-child(2) {
          text-indent: 1.14rem;
        }
      }
    }
    &_badge {
      display: flex;
      flex-direction: column;
      >div {
        display: flex;
        justify-content: space-around;
        >div {
          display: flex;
          align-items: center;
          position: relative;
          line-height: 1.25rem;
          input {
            left: -1rem;
            height: 100%;
          }
        }
      }
    }
    &_space {
      height: 0.54rem;
      background: #f3f3f3;
    }
    &_company {
      padding: 0.54rem;
      font-size: 0.5rem;
      &-items {
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
      &-page {
        padding: 0.36rem 0 0;
        height: 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        button {
          margin: 0 0.18rem;
          color: #00b3ff;
          background: #fff;
        }
      }
    }
    &_btn {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 3.5rem;
      button {
        display: block;
        margin: 0 auto;
        padding: 0.28rem 1.44rem;
        font-size: 0.57rem;
      }
    }
  }

</style>
