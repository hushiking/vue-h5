<template>
  <div class="scope">
    <MyHeader />
    <div class="scope_main">
      <MySearch :searchValue="searchValue" />
      <p>以下为根据所输关键字检索出的结果
        <span>关闭</span>
      </p>
      <Collapse v-model="value1">
        <Panel name="1">
          种植棉、麻、糖、
          <span>烟草</span>
          <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
        </Panel>
        <Panel name="2">
          种植
          <span>烟草</span>
          <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC
            Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
        </Panel>
        <Panel name="3">
          依据前置许可部门批准内容核定（
          <span>烟草</span>）
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
    </div>
  </div>
</template>

<script>
  import MyHeader from '../components/MyHeader.vue'
  import MySearch from '../components/MySearch.vue'
  export default {
    data() {
      return {
        searchValue: '烟草',
        value1: '3'
      }
    },
    components: {
      MyHeader,
      MySearch
    }
  }

</script>

<style lang="scss">
  .scope {
    font-size: 0.57rem;
    &_main {
      padding: 0.57rem;
      >p {
        padding: 0.45rem 0;
        border-bottom: 1px solid #dddee1;
        span {
          float: right;
          color: #00b3ff;
          cursor: pointer;
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
        &-content {
          padding-left: 0;
          span {
            color: #f86034;
          }
        }
      }
    }
  }

</style>
