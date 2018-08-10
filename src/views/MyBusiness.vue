<template>
  <div class="business">
    <Row>
      <Col span="12" class="business_col">
        <router-link :to="{ name: 'company_baseinfo' }">
          <span class="business_col-num">1</span>
          <span class="business_col-icon icon-menu1"></span>
          企业基本信息
        </router-link>
      </Col>
      <Col span="12" class="business_col">
        <router-link :to="{ name: 'business_scope' }">
          <span class="business_col-num">2</span>
          <span class="business_col-icon icon-menu2"></span>
          企业经营范围
        </router-link>
      </Col>
    </Row>
    <Row>
      <Col span="12" class="business_col">
        <router-link :to="{ name: 'shareholder' }">
          <span class="business_col-num">3</span>
          <span class="business_col-icon icon-menu3"></span>
          股东信息填报
        </router-link>
      </Col>
      <Col span="12" class="business_col">
        <router-link :to="{ name: 'key_personnel' }">
          <span class="business_col-num">4</span>
          <span class="business_col-icon icon-menu4"></span>
          主要人员信息
        </router-link>
      </Col>
    </Row>
    <Row>
      <Col span="12" class="business_col">
        <router-link :to="{ name: 'contact' }">
          <span class="business_col-num">5</span>
          <span class="business_col-icon icon-menu5"></span>
          企业联系人
        </router-link>
      </Col>
      <Col span="12" class="business_col">
        <router-link :to="{ name: 'file_upload' }">
          <span class="business_col-num">6</span>
          <span class="business_col-icon icon-menu6"></span>
          文件上传
        </router-link>
      </Col>
    </Row>
    <Row>
      <Col span="12" class="business_col">
        <router-link :to="{ name: 'addition'}">
          <span class="business_col-num">7</span>
          <span class="business_col-icon icon-menu7"></span>
          补充信息
        </router-link>
      </Col>
      <Col span="12" class="business_col">
        <router-link :to="{ name: 'record' }">
          <span class="business_col-num">8</span>
          <span class="business_col-icon icon-menu8"></span>
          备案填报
        </router-link>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .business {
    height: 100%;
    .ivu-row {
      height: 25%;
      border-bottom: 1px solid #ccc;
      &:last-child {
        border-bottom: 0;
      }
    }
    &_col {
      height: 100%;
      background: url(../assets/img/check.png) no-repeat top right;
      background-size: 1.5rem auto;
      &:nth-child(odd) {
        border-right: 1px solid #ccc;
      }
      >a {
        display: block;
        position: relative;
        padding: 0.54rem;
        height: 100%;
        text-align: center;
        font-size: 0.57rem;
        color: #000;
      }
      &-num {
        color: #CCCCCC;
        position: absolute;
        left: 0.5rem;
        top: 0.5rem;
      }
      &-icon {
        display: block;
        height: 80%;
      }
      @for $i from 1 through 8 {
        .icon-menu#{$i} {
          background: url(../assets/img/menu#{$i}.png) no-repeat center center;
          background-size: auto 1.75rem;
        }
      }
    }
  }

</style>
