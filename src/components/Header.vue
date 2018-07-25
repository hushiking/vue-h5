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
    line-height: 1.6rem;
    &_user {
      height: 1.6rem;
      background: url(../assets/img/top-ico1.png) no-repeat 0.54rem center #00b3ff;
      background-size: auto 0.6rem;
      padding-left: 1.4rem;
    }
    &_back {
      height: 1.6rem;
      background: url(../assets/img/top-back.png) no-repeat 3.5rem center #107bbe;
      background-size: auto 0.6rem;
      padding-left: 0.5rem;
      a {
        color: #fff;
      }
    }
  }

</style>
