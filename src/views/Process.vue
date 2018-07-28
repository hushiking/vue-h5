<template>
  <div class="process">
    <div>
      <div class="process_title">
        北京顾信丰科贸易有限公司
      </div>
      <div class="process_info">
        <p>业务类型：普通设立</p>
        <p>核准机关：北京市工商行政管理海淀分局</p>
        <p>业务状态：<span>已提交，待审核</span></p>
      </div>
    </div>
    <div>
      <div class="process_title">
        自然人股东
      </div>
      <div class="process_person">
        <Button :class="[person1.status]"><span>{{person1.name}}</span><em>{{person1.statusText}}</em></Button>
        <Button :class="[person2.status]"><span>{{person2.name}}</span><em>{{person2.statusText}}</em></Button>
      </div>
    </div>
    <div>
      <div class="process_title">
        法定代表人
      </div>
      <div class="process_person">
        <Button :class="[person3.status]"><span>{{person3.name}}</span><em>{{person3.statusText}}</em></Button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        person1: {
          name: '黄超',
          status: 'process_pass',
          statusText: '已通过'
        },
        person2: {
          name: '李刚',
          status: 'process_nosubmit',
          statusText: '未提交'
        },
        person3: {
          name: '黄超',
          status: 'process_pass',
          statusText: '已通过'
        }
      }
    }
  }

</script>

<style lang="scss" scoped>
  .process {
    height: 100%;
    background: #f3f3f3;
    >div {
      margin-bottom: 0.54rem;
      background: #fff;
      padding: 0.54rem;
    }
    &_title {
      color: #00b3ff;
      overflow: hidden;
      white-space: nowrap;
      border-bottom: 1px solid #eaeaea;
      padding-bottom: 0.22rem;
      margin-bottom: 0.14rem;
      font-weight: 700;
    }
    &_info {
      font-size: 0.5rem;
      span {
        color:#cf4553;
      }
    }
    &_person {
      padding: 0.32rem 0;
      span {
        font-size: 0.57rem;
        margin-right: 0.16rem;
      }
      em {
        font-size: 0.43rem;
      }
    }
    &_pass {
      color: #367404;
      border: 1px solid#367404;
      background: #e6eede;
    }
    &_nosubmit {
      color: #cf4553;
      border: 1px solid#cf4553;
      background: #f1dcde;
    }
  }

</style>
