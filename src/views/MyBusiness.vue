<template>
  <div class="business">
    <Row>
      <Col span="12" class="business_col">
        <router-link to="basicInformation.html">
          <span class="business_col-num">1</span>
          <span class="business_col-icon icon-menu1"></span>
          企业基本信息
        </router-link>
      </Col>
      <Col span="12" class="business_col">
        <router-link to="businessRange.html">
          <span class="business_col-num">2</span>
          <span class="business_col-icon icon-menu2"></span>
          企业经营范围
        </router-link>
      </Col>
    </Row>
    <Row>
      <Col span="12" class="business_col">
        <router-link to="basicInformation.html">
          <span class="business_col-num">3</span>
          <span class="business_col-icon icon-menu3"></span>
          股东信息填报
        </router-link>
      </Col>
      <Col span="12" class="business_col">
        <router-link to="businessRange.html">
          <span class="business_col-num">4</span>
          <span class="business_col-icon icon-menu4"></span>
          主要人员信息
        </router-link>
      </Col>
    </Row>
    <Row>
      <Col span="12" class="business_col">
        <router-link to="basicInformation.html">
          <span class="business_col-num">5</span>
          <span class="business_col-icon icon-menu5"></span>
          企业联系人
        </router-link>
      </Col>
      <Col span="12" class="business_col">
        <router-link to="businessRange.html">
          <span class="business_col-num">6</span>
          <span class="business_col-icon icon-menu6"></span>
          文件上传
        </router-link>
      </Col>
    </Row>
    <Row>
      <Col span="12" class="business_col">
        <router-link to="basicInformation.html">
          <span class="business_col-num">7</span>
          <span class="business_col-icon icon-menu7"></span>
          补充信息
        </router-link>
      </Col>
      <Col span="12" class="business_col">
        <router-link to="businessRange.html">
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
        formInline: {
          number: '',
          id: ''
        }
      }
    },
    methods: {
      handleSubmit(name) {
        this.$router.push({
          name: 'company'
        })
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .business {
    .ivu-row {
      border-bottom: 1px solid #ccc;
    }
    &_col {
      background: url(../assets/img/check.png) no-repeat top right;
      background-size: 30px auto;
      &:nth-child(odd) {
        border-right: 1px solid #ccc;
      }
      >a {
        display: block;
        position: relative;
        padding: 15px;
        text-align: center;
        font-size: 18px;
      }
      &-num {
        color: #CCCCCC;
        position: absolute;
        left: 10px;
        top: 10px
      }
      &-icon {
        display: block;
        height: 70px;
        margin-bottom: 10px;
      }
      @for $i from 1 through 8 {
        .icon-menu#{$i} {
          background: url(../assets/img/menu#{$i}.png) no-repeat center center;
          background-size: auto 50px;
        }
      }
    }
  }

</style>
