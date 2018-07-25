<template>
  <div class="bottom">
    <Button :type="btnType.type1">{{btnText.text1}}</Button>
    <Button :type="btnType.type2">{{btnText.text2}}</Button>
  </div>
</template>

<script>
export default {
  props: ['btnType', 'btnText']
}
</script>

<style lang="scss">
.bottom {
  display: flex;
  justify-content: space-around;
  padding: 0.54rem;
  button {
    width: 45%;
    padding-top: 0.36rem;
    padding-bottom: 0.36rem;
    font-size: 0.57rem;
  }
}
</style>
