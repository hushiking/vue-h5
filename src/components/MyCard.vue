<template>
  <div :class="[card.type === 'person' ? 'mycard green' : 'mycard red']" @click="go">
    <div>
      <p class="mycard_header">
        {{card.header}}
      </p>
      <div class="mycard_footer">
        <div class="mycard_footer-fund">{{card.fund}}</div>
        <div :class="[card.info ? 'mycard_footer-green' : 'mycard_footer-grey']">{{card.info ? '信息已保存' : '信息未填写'}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['card'],
  methods: {
    go() {
      if (this.card.type === 'person') {
        this.$router.push({ name: 'shareholder_natural' })
      } else {
        this.$router.push({ name: 'shareholder_non_natural' })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.green {
  background: #1aa766;
  border: 1px solid #dedede;
}
.red {
  background: #f86034;
  border: 1px solid #dedede;
}
.mycard {
  >div {
    margin-left: 0.27rem;
    padding: 0.36rem 0.36rem 0.36rem 0.72rem;
    background: #fff;
  }
  &_header {
    font-size: 0.72rem;
    font-weight: 700;
    margin: 0.16rem 0;
  }
  &_footer {
    display: flex;
    justify-content: space-between;
    line-height: 1;
    >div {
      &:last-child {
        font-size: 0.5rem;
      }
    }
    &-fund {
      color: #f86034;
    }
    &-grey {
      color: #aaa;
    }
    &-green {
      color: #1aa766;
    }
  }
}
</style>
