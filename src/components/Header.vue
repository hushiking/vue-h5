<template>
  <Row class="header">
    <Col span="16" class="header_user">当前用户：蔚鸿博</Col>
    <Col span="8" class="header_back">
    <router-link :to="{ name: 'my_business' }">返回菜单页</router-link>
    </Col>
  </Row>
</template>

<style lang="scss">
  body {
    padding: 0;
  }

</style>
<style lang="scss" scoped>
  .header {
    color: #fff;
    line-height: 45px;
    font-size: 14px;
    &_user {
      height: 45px;
      background: url(../assets/img/top-ico1.png) no-repeat 15px center #00b3ff;
      background-size: auto 20px;
      padding-left: 45px;
    }
    &_back {
      height: 45px;
      background: url(../assets/img/top-back.png) no-repeat 90% center #107bbe;
      background-size: auto 20px;
      padding-left: 15px;
      a {
        color: #fff;
      }
    }
  }

</style>
